class Vacation < ApplicationRecord
  belongs_to :employee

  validates :start_date, :end_date, presence: true
  validate :validate_vacation_days
  validate :validate_vacation_periods
  validate :validate_consecutive_days

  private

  def validate_vacation_days
    vacation_days = (self.end_date - self.start_date).to_i + 1
    employee_vacation_days_available = self.employee.vacation_days_available
    if employee_vacation_days_available <= 0
      errors.add(:base, "Voce nao tem ferias para usufruir.")
      errors.add(:base, "Dias de ferias Disponiveis: #{employee_vacation_days_available}")
    elsif vacation_days < 10 
      errors.add(:base, "Nao pode tirar menos que 10 dias consecutivos")
      errors.add(:base, "Dias de Ferias requisitado: #{vacation_days}")
      errors.add(:base, "Dias de ferias Disponiveis: #{employee_vacation_days_available}")
    end
  end

  def validate_vacation_periods
    overlapping_vacations = Vacation.where(employee_id: self.employee_id)
                                    .where.not(id: self.id)
                                    .where('(start_date <= ? AND end_date >= ?) OR (start_date >= ? AND start_date <= ?)',
                                           self.start_date, self.start_date, self.start_date, self.end_date)
                                    .count

    if overlapping_vacations > 0
      errors.add(:base, "O periodo de ferias do colaborador nao pode ser sobreposto")
    end
  end

  def validate_consecutive_days
    vacation_days = (self.end_date - self.start_date).to_i + 1

    if vacation_days < 14
      errors.add(:base, "Voce precisa agendar ao menos um periodo maior que 14 dias consecutivos")
    end

    if vacation_days < 5
      errors.add(:base, "Nao pode tirar menos que 5 dias consecutivos")
    end
  end

end
