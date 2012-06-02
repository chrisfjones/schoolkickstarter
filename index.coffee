require('zappa') 80, ->
  @use 'static'

  @get '/test' : 'test'
