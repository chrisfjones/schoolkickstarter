(function() {

  $(function() {
    var projects,
      _this = this;
    projects = new Firebase('http://gamma.firebase.com/chrisfjones/projects');
    $("#moneySlider").slider();
    return $('#createProjectButton').click(function(e) {
      var project;
      project = {
        name: $('#projectName').val(),
        money: $('#moneySlider').val(),
        time: $('#time').val(),
        books: $('#books').val(),
        clothing: $('#clothing').val(),
        food: $('#food').val(),
        awesome: $('#awesome').val()
      };
      return projects.push(project);
    });
  });

}).call(this);
