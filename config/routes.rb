Rails.application.routes.draw do
  resources :options
  resources :events
  resources :locations
  resources :attributes
  resources :items
  resources :characters
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
