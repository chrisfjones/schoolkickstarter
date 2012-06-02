(function() {

  $(function() {
    var projects,
      _this = this;
    projects = new Firebase('http://gamma.firebase.com/chrisfjones/projects');
    return $('#createProjectButton').click(function(e) {
      var project;
      project = {
        name: $('#projectName').val()
      };
      return projects.push(project);
    });
  });

}).call(this);
