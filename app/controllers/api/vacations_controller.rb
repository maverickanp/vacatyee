class Api::VacationsController < ApplicationController
  def index
    vacations = Vacation.all
    render json: vacations
  end

  def show
    vacation = Vacation.find(params[:id])
    render json: vacation
  end

  def create
    vacation = Vacation.new(vacation_params)

    if vacation.save
      render json: vacation, status: :created
    else
      render json: { errors: vacation.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    vacation = Vacation.find(params[:id])

    if vacation.update(vacation_params)
      render json: vacation
    else
      render json: { errors: vacation.errors.full_messages }, status: :unprocessable_entity
    end
  end
  
  def destroy
    vacation = Vacation.find(params[:id])
    vacation.destroy
    render json: { message: 'Ferias removidas com sucesso!' }
  end
  
    private
    
    def vacation_params
        params.require(:vacation).permit(:employee_id, :start_date, :end_date)
    end

end
