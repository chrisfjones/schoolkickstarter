$ ->
  projectId = window.location.hash
  chunks = projectId.split('#')
  projectId = chunks.pop()
#  url = "http://gamma.firebase.com/chrisfjones/projects/#{projectId}"
  url = "http://gamma.firebase.com/chrisfjones/projects/-ITicj6CTTDqMJi1Q3Ax"
  console.log url
  projectData = new Firebase url
  projectData.on 'value', (projectSnapshot) ->
    console.log projectSnapshot.val()
    project = projectSnapshot.val()
    $('#donateButton').unbind().click (e) =>
      donateAmount = parseInt $('#donateAmount').val()
      console.log donateAmount
      console.log project.moneyDonated
      projectData.child('moneyDonated').set project.moneyDonated + donateAmount
