Rails.application.routes.draw do
  namespace :api do
      resources :employees
      resources :vacations
  end
end
