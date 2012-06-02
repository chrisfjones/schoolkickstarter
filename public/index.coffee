$ ->
  projects = new Firebase 'http://gamma.firebase.com/chrisfjones/projects'

  projects.once "value", (snapshot) ->
    list = snapshot.val()
    for own id, project of list
      console.log project.toSource()
      template = "<div class='project'>{{name}}</div><br>"
      $('#list').append Mustache.to_html template, project 
