class Employee < ApplicationRecord
has_many :vacations
validates :name, :position, :hire_date, presence: true
validates :hire_date, timeliness: { on_or_before: lambda { Date.current }, type: :date }

    def vacation_days_available
        months_since_hire = (Date.today.year * 12 + Date.today.month) - (self.hire_date.year * 12 + self.hire_date.month)
        (30 * (months_since_hire / 12.0)).to_i
    end
end
