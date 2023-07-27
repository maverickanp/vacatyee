class Api::EmployeesController < ApplicationController
    def index
        p 'colaboradores'
        @employees = Employee.all
        render json: @employees
    end

    def create
        @employees = Employee.new(employees_params)
    
        if @employees.save
          render json: @employees, status: :created
        else
          render json: @employees.errors, status: :unprocessable_entity
        end
    end

    private
    
    def employees_params
        params.require(:employee).permit(:name, :position, :hire_date)
    end
end
