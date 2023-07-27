class Vacation < ApplicationRecord
  belongs_to :employee

  validates :start_date, :end_date, presence: true
  validate :start_date_no_overlap, :min_duration

  def start_date_no_overlap
    if employee.vacations.where.not(id: id).any? { |vacations| (start_date..end_date).overlaps?(vacations.start_date..vacations.end_date) }
      errors.add(:start_date, "já está agendada para outro período de férias")
    end
  end

  def min_duration
    if (end_date - start_date).to_i < 10
      errors.add(:end_date, "deve ser pelo menos 10 dias após a data de início")
    end
  end
end
