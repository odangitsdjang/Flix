Rails.application.routes.draw do
  root to: 'react_page#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create, :show, :update] do
      resources :pixes, only: [:index, :create]
    end
    resources :following, only: [:create]
    delete "/following", to: "following#destroy"

    resource :session, only: [:create, :destroy, :show]
    resources :pixes, only: [:show, :destroy]

  end
  # the below route is for home feed, getting pix of the users that current user is following
  get '/api/pix/:user_id', to: 'pixes#following_pix'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
