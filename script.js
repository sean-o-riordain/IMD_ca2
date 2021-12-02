var scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar' })

function sendContact() {
  
  alert("Your Message has been sent!");
  document.getElementById('emailInput').value= "";
  document.getElementById('subjectInput').value= "";
  document.getElementById('messageInput').value= "";

  
}

var myModalEl = document.getElementById('portfolio1')
myModalEl.addEventListener('hidden.bs.modal', function (event) {
  // do something...
})