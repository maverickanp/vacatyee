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
end
