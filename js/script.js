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
    var name = document.getElementById('user_name').value;
    var email = document.getElementById('email').value;
    var request = document.getElementById('request').value;

    // Reset error messages
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('requestError').innerHTML = '';

    // Validate name
    if (name.trim() === '') {
      document.getElementById('nameError').innerHTML = 'Name is required';
      return false;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      document.getElementById('emailError').innerHTML = 'Invalid email address';
      return false;
    }

    // Validate request
    if (request.trim() === '') {
      document.getElementById('requestError').innerHTML = 'Request is required';
      return false;
    }

    // Form is valid, send data
    sendData({ name, email, request });

    // Prevent form submission (optional)
    return false;
  }

  function sendData(data) {
    // Replace 'https://example.com' with the actual URL
    var url = 'https://aigold.co.uk';
    console.log(JSON.stringify(data));

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // You can handle success here, e.g., show a success message
      console.log('Data sent successfully');
    })
    .catch(error => {
      // Handle error here, e.g., show an error message
      console.error('There was a problem with the fetch operation:', error);
    });
  }























  function validateBannerForm() {
    var bannerEmail = document.getElementById('banner_email').value;

    // Reset error message
    document.getElementById('bannerEmailError').innerHTML = '';

    // Validate email address
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(bannerEmail)) {
      document.getElementById('bannerEmailError').innerHTML = 'Invalid email address';
      return false;
    }

    // Form is valid, send data
    sendBannerFormData({ email: bannerEmail });

    // Prevent form submission (optional)
    return false;
  }
  function validateNewsletterForm() {
    var newsletterEmail = document.getElementById('newsletter_email').value;

    // Reset error message
    document.getElementById('newsletterEmailError').innerHTML = '';

    // Validate email address
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      document.getElementById('newsletterEmailError').innerHTML = 'Invalid email address';
      return false;
    }

    // Form is valid, send data
    sendBannerFormData({ email: newsletterEmail });

    // Prevent form submission (optional)
    return false;
  }

  function sendBannerFormData(data) {
    // Replace 'https://example.com' with the actual URL
    var url = 'https://aigold.co.uk';

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // You can handle success here, e.g., show a success message
      console.log('Banner form data sent successfully');
    })
    .catch(error => {
      // Handle error here, e.g., show an error message
      console.error('There was a problem with the fetch operation:', error);
    });
  }