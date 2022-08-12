class AvatarsController < ApplicationController

  def index
    avatars = Avatar.all
    render json: avatars.to_json(except: [:created_at, :updated_at])
  end

end
