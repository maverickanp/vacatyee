class Api::VacationsController < ApplicationController
    def index
        @vacations = Vacation.all
        render json: @vacations
    end

    def create
        @vacations = Vacation.new(vacations_params)
    
        if @vacations.save
          render json: @vacations, status: :created
        else
          render json: @vacations.errors, status: :unprocessable_entity
        end
    end

    private
    
    def vacations_params
        params.require(:vacations).permit(:employee_id, :start_date, :end_date)
    end

end
