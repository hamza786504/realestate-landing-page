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

function validateForm() {
  var name = document.getElementById("user_name").value;
  var email = document.getElementById("email").value;
  var request = document.getElementById("request").value;

  // Reset error messages
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("requestError").innerHTML = "";

  // Validate name
  if (name.trim() === "") {
    document.getElementById("nameError").innerHTML = "Name is required";
    return false;
  }

  // Validate email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("emailError").innerHTML = "Invalid email address";
    return false;
  }

  // Validate request
  if (request.trim() === "") {
    document.getElementById("requestError").innerHTML = "Request is required";
    return false;
  }

  // Form is valid, send data
  sendData({ name, email, request });

  // Prevent form submission (optional)
  return false;
}

function sendData(data) {
  // Replace 'https://example.com' with the actual URL
  var url = "https://aigold.co.uk";
  console.log(JSON.stringify(data));

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        showToast("Error!", "Network response was not ok", "bg-danger");
        throw new Error("Network response was not ok");
      }
      // Show success toast on success
      showToast("Success!", "Thanks for reaching us!!", "bg-success");
    })
    .catch((error) => {
      // Show error toast on failure
      showToast(
        "Error!",
        "Failure!!! We couldn't save your details, properly. Please try again in few minutes",
        "bg-danger"
      );
      console.error(
        "Failure!!! We couldn't save your details, properly. Please try again in few minutes",
        error
      );
    });
}

function validateBannerForm() {
  var bannerEmail = document.getElementById("banner_email").value;

  // Reset error message
  document.getElementById("bannerEmailError").innerHTML = "";

  // Validate email address
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(bannerEmail)) {
    document.getElementById("bannerEmailError").innerHTML =
      "Invalid email address";
    return false;
  }

  // Form is valid, send data
  sendBannerFormData({ email: bannerEmail });

  // Prevent form submission (optional)
  return false;
}
function validateNewsletterForm() {
  var newsletterEmail = document.getElementById("newsletter_email").value;

  // Reset error message
  document.getElementById("newsletterEmailError").innerHTML = "";

  // Validate email address
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(newsletterEmail)) {
    document.getElementById("newsletterEmailError").innerHTML =
      "Invalid email address";
    return false;
  }

  // Form is valid, send data
  sendBannerFormData({ email: newsletterEmail });

  // Prevent form submission (optional)
  return false;
}

function sendBannerFormData(data) {
  var url = "https://aigold.co.uk";

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        showToast("Error!", "Network response was not ok", "bg-danger");
        throw new Error("Network response was not ok");
      }
      // Show success toast on success
      showToast("Success!", "Thanks for reaching us!!", "bg-success");
    })
    .catch((error) => {
      // Show error toast on failure
      showToast(
        "Error!",
        "Failure!!! We couldn't save your details, properly. Please try again in few minutes",
        "bg-danger"
      );
      console.error(
        "Failure!!! We couldn't save your details, properly. Please try again in few minutes",
        error
      );
    });
}

function showToast(title, message, bgColorClass) {
  // Use Bootstrap toast to show success or error message
  var toastContainer = document.getElementById("toastContainer");
  var toast = new bootstrap.Toast(toastContainer);

  // Update toast content
  toastContainer.querySelector(".toast-title").innerText = title;
  toastContainer.querySelector(".toast-body").innerText = message;

  // Update toast background color class
  toastContainer.classList.remove("bg-success", "bg-danger");
  toastContainer.classList.add(bgColorClass);


    var forms = document.forms;
    for (var i = 0; i < forms.length; i++) {
        forms[i].reset();
    }

  // Show the toast
  toast.show();
}
