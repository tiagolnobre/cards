Rails.application.routes.draw do
  # get 'landing/index'
  # get '/*path', to: 'application#index', format: false
  #
  get '/*path', to: 'application#index', format: false

  root to: 'application#index', format: false
  # get '/*test', to: 'test#index', format: false


 #  # Route to hit the Vue app
 # scope :app do
 #   get "/*path", to: "app#app", format: false
 # end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
