(function() {

  $(function() {
    var projects,
      _this = this;
    projects = new Firebase('http://gamma.firebase.com/chrisfjones/projects');
    projects.on('value', function(snapshot) {
        var p = snapshot.val();
        for (var i in p) {
          var template = "<div class='project'>{{name}}</div><br>";
          $('#list').append(Mustache.to_html(template, p[i]));
        }
    });
  });

}).call(this);
