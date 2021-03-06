Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do

    resources :users, only: [:create]

    resource :session, only: [:create, :destroy, :show]

    resources :notes, except: [:index, :create]
    get '/all_notes', to: 'notes#all_notes'

    resources :notebooks, only: [:create, :index, :show, :update, :destroy] do
      resources :notes, only: [:index, :create]
    end

    resources :tags, only: [:create, :show, :index, :destroy] do
      resources :notes, only: :index
    end

    resources :tags_notes, only: [:index, :create, :destroy]
    
  end
  root to: "static_pages#root"
end
