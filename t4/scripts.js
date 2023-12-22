// scripts.js
function validateForm(event) {
  event.preventDefault(); // Prevents the form from submitting by default
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Regular expression for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Regular expression for password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9@]*$/;

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (!passwordRegex.test(password)) {
    alert('Password must contain at least one uppercase letter, one number, and no special characters except @');
    return;
  }

  // Check if password matches the redirect condition
  if (password === 'SmartServTest@123') {
    // Redirect to the dashboard page
    window.location.href = 'dashboard.html';
  } else {
    alert('Incorrect password');
  }
}

// Function to handle "Forgot your password" link

function forgotPassword() {
  const emailAddress = 'support@smartserv.io';
  const subject = 'Password Reset Request';
  const body = 'Please reset my password.';

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const newTab = window.open(mailtoLink, '_blank');

  if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
    // If the new tab didn't open, alert the user
    alert('Please enable pop-ups to proceed with the password reset.');
  }
}
  
  

