Rails.application.routes.draw do
  root to: 'react_page#root'
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show, :edit, :update]
    resource :session, only: [:create, :destroy, :show]
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
