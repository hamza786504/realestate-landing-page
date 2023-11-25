jQuery(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  slideTransition: "linear",
  autoplaySpeed: 6000,
  dots: false,
  center: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    744: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});

jQuery(".owl-carousel").trigger("play.owl.autoplay", [2000]);

function setSpeed() {
  jQuery(".owl-carousel").trigger("play.owl.autoplay", [6000]);
}

setTimeout(setSpeed, 1000);

function showContent(contentId) {
  const buttons = document.querySelectorAll(".toggle-button");
  buttons.forEach((button) => button.classList.remove("active"));

  const contentItems = document.querySelectorAll(".gallery-item");
  contentItems.forEach((item) => item.classList.remove("active"));

  const activeButton = document.querySelector(
    `button[onclick="showContent('${contentId}')"]`
  );
  activeButton.classList.add("active");

  const activeContent = document.getElementById(contentId);
  activeContent.classList.add("active");
}























function removeError(){
  document.querySelectorAll(".form-message").forEach(result => {
    result.innerHTML = "";
  });
}








// Validation and form submission for Form 1
function validateNewsletterForm() {
  removeError();
  var newsletterEmail = document.getElementById("newsletter_email").value;

  // Reset error message
  document.getElementById("newsletterEmailError").innerHTML = "";

  // Validate email address
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(newsletterEmail)) {
      showFormMessage("newsletterEmailError", "Error", "Invalid email address", "text-danger");     
      return false;
  }

  // Form is valid, send data
  sendFormData("formContainer1", { email: newsletterEmail });

  // Prevent form submission (optional)
  return false;
}

// Validation and form submission for Form 2
function validateForm() {
  removeError();
  var name = document.getElementById("user_name").value;
  var email = document.getElementById("email").value;
  var request = document.getElementById("request").value;

  // Reset error messages
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("requestError").innerHTML = "";

  // Validate name
  if (name.trim() === "") {
      showFormMessage("nameError", "Error", "Name is required", "text-danger");
      return false;
  }

  // Validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    showFormMessage("emailError", "Error", "Invalid email address", "text-danger");
      return false;
  }

  // Validate request
  if (request.trim() === "") {
      showFormMessage("requestError", "Error", "Request is required", "text-danger");
      return false;
  }

  // Form is valid, send data
  sendFormData("formContainer2", { name, email, request });

  // Prevent form submission (optional)
  return false;
}

// Validation and form submission for Form 3
function validateBannerForm() {
  removeError();
  var bannerEmail = document.getElementById("banner_email").value;

  // Validate email address
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(bannerEmail)) {
      showFormMessage("formContainer3", "Error", "Invalid email address", "text-danger");

      return false;
  }

  // Form is valid, send data
  sendFormData("formContainer3", { email: bannerEmail });

  // Prevent form submission (optional)
  return false;
}

// Function to send form data using fetch
function sendFormData(containerId, data) {
  var url = "https://aigold.co.uk";

  fetch(url, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
  })
      .then((response) => response.json())
      .then((result) => {
          // Check if the request was successful
          if (result.success) {
              showFormMessage(containerId, "Success", "Thanks for getting in touch. We will be in contact soon.", "text-success");
          } else {
              showFormMessage(containerId, "Error", "Failure!!! Please try again later.", "text-danger");
          }
      })
      .catch((error) => {
          showFormMessage(containerId, "Error", "Failure!!! Please try again later.", "text-danger");
          console.error("Failure!!! Please try again later.", error);
      });
}

// Function to display messages below the form
function showFormMessage(containerId, title, message, textColorClass) {
  var formContainer = document.getElementById(containerId);
  var formMessageContainer = formContainer.querySelector(".form-message");



  // Create a div for the form message if it doesn't exist
  if (!formMessageContainer) {
      formMessageContainer = document.createElement("div");
      formMessageContainer.classList.add("form-message");
      formContainer.appendChild(formMessageContainer);
  }

 // Remove existing messages
 formMessageContainer.innerHTML = "";

  // Update form message content
  var messageElement = document.createElement("p");
  messageElement.className = textColorClass;
  messageElement.innerText = `${title}: ${message}`;
  formMessageContainer.appendChild(messageElement);
}

