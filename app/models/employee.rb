class Employee < ApplicationRecord
has_many :vacations
validates :name, :position, :hire_date, presence: true
validates :hire_date, timeliness: { on_or_before: lambda { Date.current }, type: :date }
end
