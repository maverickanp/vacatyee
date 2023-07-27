Rails.application.routes.draw do
  namespace :api do
    resources :employees, only: [:index, :show, :create]
    resources :vacations, only: [:index, :create]
  end
end
