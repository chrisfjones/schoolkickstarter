$ ->
  projects = new Firebase 'http://gamma.firebase.com/chrisfjones/projects'
  $("#moneySlider").slider()
  $('#createProjectButton').click (e) =>
    project =
      name: $('#projectName').val(),
      money: $('#moneySlider').val(),
      time: $('#time').val(),
      books: $('#books').val(),
      clothing: $('#clothing').val(),
      food: $('#food').val(),
      awesome: $('#awesome').val()
    projects.push project
