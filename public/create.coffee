$ ->
  projects = new Firebase 'http://gamma.firebase.com/chrisfjones/projects'
  $('#createProjectButton').click (e) =>
    project =
      name: $('#projectName').val()
    projects.push project
