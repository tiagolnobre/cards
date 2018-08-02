class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  def index
    render inline: '', layout: 'application' # Avoid having an empty view file.
  end
end
