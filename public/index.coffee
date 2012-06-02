#$ = require 'jquery'
$ ->
  projects = new Firebase 'http://gamma.firebase.com/chrisfjones/projects'

  projects.on "value", (snapshot) ->
    list = snapshot.val()
    for own id, project of list
      template = "<div class='project'>{{name}}</div><br>"
      $('#list').append( Mustache.to_html(template, project) )
