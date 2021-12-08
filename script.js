var scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar' })

function sendContact() {
  alert("Your Message has been sent!");
  

  
}

function alert(message, type) {
  document.getElementById('liveAlertPlaceholder').innerHTML = "";
  var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
  var wrapper = document.createElement('div')
  document.getElementById('emailInput').value= "";
  document.getElementById('subjectInput').value= "";
  document.getElementById('messageInput').value= "";
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  console.log(wrapper)
  alertPlaceholder.append(wrapper)

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

