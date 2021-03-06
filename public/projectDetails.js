(function() {

  $(function() {
    var chunks, projectData, projectId;
    projectId = window.location.hash;
    chunks = projectId.split('#');
    projectId = chunks.pop();
    console.log("http://gamma.firebase.com/chrisfjones/projects/" + projectId);
    projectData = new Firebase("http://gamma.firebase.com/chrisfjones/projects/" + projectId);
    return projectData.on('value', function(projectSnapshot) {
      var moneyDonated, moneyNeeded, moneyRatio, project;
      project = projectSnapshot.val();
      $('#projectName').text(project.name);
      $('#projectHeading').text(project.descriptionHeading);
      $('#projectDescription').text(project.description);
      $('#projectImage').attr('src', project.image);
      moneyNeeded = project.maxMoneyNeeded;
      moneyDonated = project.moneyDonated;
      moneyRatio = moneyDonated / moneyNeeded;
      console.log(moneyRatio * 100);
      $('#moneyDonated').width("" + (moneyRatio * 100) + "%");
      $('#moneyDonated').text(moneyDonated);
      $('#donationGoal').text("$" + moneyNeeded);
      return $('#donateButton').unbind().click(function(e) {
        var donateAmount;
        donateAmount = parseInt($('#donateAmount').val());
        console.log(donateAmount);
        return projectData.child('moneyDonated').set(moneyDonated + donateAmount);
      });
    });
  });

}).call(this);
