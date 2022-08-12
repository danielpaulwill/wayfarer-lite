Rails.application.routes.draw do
  resources :avatars
  resources :options
  resources :events
  resources :locations
  resources :attributes
  resources :items
  resources :characters
  resources :users
  # get '/character-avatars', to: 'CharacterAvatarController#index'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
