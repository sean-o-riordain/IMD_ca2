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


const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Software Developer", "Photographer", "Student", "Dreamer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});


function Time() {
  
  var date = new Date();
  var myDate = new Date();
  var timeZoneOffeset = date.getTimezoneOffset();
  myDate.setMinutes(myDate.getMinutes() + timeZoneOffeset);
  
  
  // Get current hour
  var hour = date.getHours();
  var myHour = myDate.getHours();
  // Get current minute
  var minute = date.getMinutes();
  var myMinute = myDate.getMinutes();
  // Get current second
  var second = date.getSeconds();
  var mySecond = myDate.getSeconds();

  // Updating hour, minute, and second
  // if they are less than 10
  hour = update(hour);
  myHour = update(myHour);
  minute = update(minute);
  myMinute = update(myMinute);
  second = update(second);
  mySecond = update(mySecond);
  // Adding time elements to the div
  document.getElementById("yourTime").innerHTML= "<strong>Your Local Time:</strong> " +hour + " : " + minute + " : " + second;
  document.getElementById("myTime").innerHTML = "<strong>My Local Time</strong>: " + myHour +" : "+myMinute+" : "+mySecond
  // Set Timer to 1 sec (1000 ms)
  setTimeout(Time, 1000);
 }
  // Function to update time elements if they are less than 10
  // Append 0 before time elements if they are less than 10
 function update(t) {
  if (t < 10) {
  return "0" + t;
  }
  else {
  return t;
  }
 }
 Time();

 function Age() {
  var birthdate = new Date(2000, 0, 14);
  var now = new Date();
  var age = now.getFullYear() - birthdate.getFullYear();
    var m = now.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthdate.getDate())) {
        age--;
    }
  document.getElementById("age").innerHTML= "<strong>Age:</strong> " +age;
 }
 Age();

var option = 
{ 
  animation: true,
  delay: 5000 
};

function Download() {
  var toastHTMLElement = document.getElementById("liveToast");

  var toastElement = new bootstrap.Toast( toastHTMLElement, option);
  toastElement.show();
}
