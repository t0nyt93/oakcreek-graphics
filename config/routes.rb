Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/projects/*other' => 'application#angular'
  get '/about' => 'application#angular'
  get '/contact' => 'application#angular'
  get '/home' => 'application#angular'
  get '/webgl' => 'application#angular'

  root :to =>'application#angular'
end
