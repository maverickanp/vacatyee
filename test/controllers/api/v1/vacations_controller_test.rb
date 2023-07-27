require "test_helper"

class Api::V1::VacationsControllerTest < ActionDispatch::IntegrationTest
  # test "the truth" do
  #   assert true
  # end
  def test_create_vacation_for_employee
    employee = employees(:artur)

    # Criar uma nova férias associada ao colaborador
    vacation = create_vacation_for_employee(
      employee.id,
      Date.new(2023, 7, 25),
      Date.new(2023, 8, 4)
    )
    p employee
    p vacation
    # Verificar se a nova férias foi salva corretamente
    assert vacation.save, "Falha ao salvar as férias"


    # Verificar se a férias está associada ao colaborador correto
    assert_equal employee.id, vacation.employee_id, "A férias não está associada ao colaborador correto"
  end
end
