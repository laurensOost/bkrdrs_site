document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple email validation regex
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // These IDs from the previous steps
    emailjs.sendForm('service_ikab6sp', 'template_fl1p6kp', this)
      .then(function() {
        console.log('SUCCESS!');
        alert('Your message has been sent!');
      }, function(error) {
        console.log('FAILED...', error);
        alert('Oops... something went wrong.');
      });
  });