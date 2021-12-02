var scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar' })

function sendContact() {
  
  alert("Your Message has been sent!");
  document.getElementById('emailInput').value= "";
  document.getElementById('subjectInput').value= "";
  document.getElementById('messageInput').value= "";

  
}

function portfolioModalNext() {
  console.log("dfsd")
  $('.close').click(function(){
    if ($('.one').is(':checked'))
    {
      $("#portfolio1").modal('toggle');
    }
  })
}