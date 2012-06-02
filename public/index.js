(function() {
  var __hasProp = Object.prototype.hasOwnProperty;

  $(function() {
    var projects,
      _this = this;
    $('#newProject').click(function(e) {
      return window.location = "create.html";
    });
    $('#newProfile').click(function(e) {
      return window.location = "profile.html";
    });
    projects = new Firebase('http://gamma.firebase.com/chrisfjones/projects');
    return projects.once("value", function(snapshot) {
      var id, list, project, template, _results;
      list = snapshot.val();
      _results = [];
      for (id in list) {
        if (!__hasProp.call(list, id)) continue;
        project = list[id];
        project.pid = id;
        template = "<div class='project'><a href='projectDetails.html\#{{pid}}'>{{name}}</div><br>";
        _results.push($('#list').append(Mustache.to_html(template, project)));
      }
      return _results;
    });
  });

}).call(this);
