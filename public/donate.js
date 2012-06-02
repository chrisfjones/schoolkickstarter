(function() {

  $(function() {
    var chunks, projectData, projectId, url;
    projectId = window.location.hash;
    chunks = projectId.split('#');
    projectId = chunks.pop();
    url = "http://gamma.firebase.com/chrisfjones/projects/-ITicj6CTTDqMJi1Q3Ax";
    console.log(url);
    projectData = new Firebase(url);
    return projectData.on('value', function(projectSnapshot) {
      var project,
        _this = this;
      console.log(projectSnapshot.val());
      project = projectSnapshot.val();
      return $('#donateButton').unbind().click(function(e) {
        var donateAmount;
        donateAmount = parseInt($('#donateAmount').val());
        console.log(donateAmount);
        console.log(project.moneyDonated);
        return projectData.child('moneyDonated').set(project.moneyDonated + donateAmount);
      });
    });
  });

}).call(this);
