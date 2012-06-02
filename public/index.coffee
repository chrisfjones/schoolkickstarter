$ ->
  $('#newProject').click (e) => window.location = "create.html"
  $('#newProfile').click (e) => window.location = "profile.html"

  projects = new Firebase 'http://gamma.firebase.com/chrisfjones/projects'

  projects.once "value", (snapshot) ->
    list = snapshot.val()
    for own id, project of list
      project.pid = id
      template = "<div class='project'><a href='projectDetails.html\#{{pid}}'>{{name}}</div><br>"
      $('#list').append Mustache.to_html template, project 
