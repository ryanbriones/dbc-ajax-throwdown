get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/message' do
  Faker::Company.catch_phrase
end

get '/users/search' do
  User.where("LOWER(name) LIKE ?", "%#{params[:name].downcase}%").to_json
end

post '/users' do
  @user = User.create!(params[:user])
  
  if request.xhr?
    content_type :json
    @user.to_json
  else
    redirect to("/")
  end
end