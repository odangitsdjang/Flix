Rails.application.routes.draw do
  root to: 'react_page#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update] do
      resources :pixes, only: [:index, :create]
    end
    resource :session, only: [:create, :destroy, :show]
    resources :pixes, only: [:show, :destroy]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
