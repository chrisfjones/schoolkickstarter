$ ->
  projects = new Firebase 'http://gamma.firebase.com/chrisfjones/projects'
  $("#moneySlider").slider()
  $('#createProjectButton').click (e) =>
    project =
      name: $('#projectName').val()
    projects.push project
