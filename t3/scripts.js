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

  // If all validations pass, you can proceed with form submission or other actions
  // For example: document.getElementById('loginForm').submit();
  alert('Validation successful. Form can be submitted.');
}
