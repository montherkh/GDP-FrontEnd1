const namee = document.getElementById("nameInput");
const email = document.getElementById("emailInput");
const phone = document.getElementById("phoneInput");
const howDidYouFindUs = document.getElementById("howDidYouFindUs");

const sendButton = document.getElementById("sendButton");

function onButtonClick() {
    console.log("Name: " + namee.value);
    console.log("Email: " + email.value);
    console.log("Phone Number: " + phone.value);
    console.log("How did you find us:" + howDidYouFindUs.value);
}

sendButton.addEventListener("click", onButtonClick());