function updateTime() {
  const timeElement = document.getElementById("currentTime");
  if (timeElement) {
    const now = new Date();
    timeElement.textContent = now.toLocaleString();
  }
}
updateTime();
setInterval(updateTime, 1000);

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    const successMessage = document.getElementById("successMessage");

    let isValid = true;
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    if (!name.value.trim()) {
      document.getElementById("error-name").textContent = "Full name is required.";
      isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      document.getElementById("error-email").textContent = "Enter a valid email address.";
      isValid = false;
    }

    if (!subject.value.trim()) {
      document.getElementById("error-subject").textContent = "Subject is required.";
      isValid = false;
    }

    if (message.value.trim().length < 10) {
      document.getElementById("error-message").textContent = "Message must be at least 10 characters.";
      isValid = false;
    }

    if (isValid) {
      successMessage.hidden = false;
      contactForm.reset();
    } else {
      successMessage.hidden = true;
    }
  });
}
