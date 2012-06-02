$ ->
  projectId = window.location.hash
  chunks = projectId.split('#')
  projectId = chunks.pop()
  console.log "http://gamma.firebase.com/chrisfjones/projects/#{projectId}"
  projectData = new Firebase "http://gamma.firebase.com/chrisfjones/projects/#{projectId}"
  projectData.on 'value', (projectSnapshot) ->
    project = projectSnapshot.val()
    $('#projectName').text project.name
    moneyNeeded = project.maxMoneyNeeded
    moneyDonated = project.moneyDonated
    moneyRatio = moneyDonated / moneyNeeded
    console.log (moneyRatio * 300)
    $('#moneyDonated').width (moneyRatio * 300)
    $('#moneyDonated').text moneyDonated
    $('#donateButton').unbind().click (e) ->
      donateAmount = parseInt $('#donateAmount').val()
      console.log donateAmount
      projectData.child('moneyDonated').set moneyDonated + donateAmount
