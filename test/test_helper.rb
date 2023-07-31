ENV["RAILS_ENV"] ||= "test"
require_relative "../config/environment"
require "rails/test_help"

class ActiveSupport::TestCase
  # Run tests in parallel with specified workers
  parallelize(workers: :number_of_processors)

  # Setup all fixtures in test/fixtures/*.yml for all tests in alphabetical order.
  fixtures :all

  # Add more helper methods to be used by all tests here...

  # Método auxiliar para criar uma nova férias associada a um colaborador
  def create_vacation_for_employee(employee_id, start_date, end_date)
    Vacation.create(
      employee_id: employee_id,
      start_date: start_date,
      end_date: end_date
    )
  end

  # Cada colaborador ganha 30 dias de férias a cada período de 12 meses.
  # teste se o colaborador tem mais de 365 dias de emprego
  def test_create_vacation_for_employee
    # Obter um colaborador de fixture (dados de teste)
    employee = employees(:artur)

    # Criar uma nova férias associada ao colaborador
    vacation = create_vacation_for_employee(
      employee.id,
      Date.new(2023, 7, 25),
      Date.new(2023, 8, 1)
    )

    # Verificar se a nova férias foi salva corretamente
    assert vacation.save, "Falha ao salvar as férias"

    # Verificar se a férias está associada ao colaborador correto
    assert_equal employee.id, vacation.employee_id, "A férias não está associada ao colaborador correto"

    # Verificar se a diferença entre hire_date e start_date é maior que 12 meses
    assert (vacation.starts_at - employee.hire_date).to_i > 365, "A diferença entre as datas é menor ou igual a 12 meses"
  end
end
