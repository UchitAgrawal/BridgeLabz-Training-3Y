$(function () {
  const existingEmails = ['registered@example.com', 'student@example.com']; // Demo-only uniqueness list.
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  function setError($field, errorSelector, message) {
    // Use .css() to add a red border to invalid fields and clear it for valid fields.
    if (message) {
      $field.css('border', '2px solid #dc2626').attr('aria-invalid', 'true');
      $(errorSelector).text(message);
    } else {
      $field.css('border', '').attr('aria-invalid', 'false');
      $(errorSelector).text('');
    }
  }

  $('#registrationForm').on('submit', function (event) {
    event.preventDefault();
    const $name = $('#fullName');
    const $email = $('#email');
    const $password = $('#password');
    const name = $name.val().trim();
    const email = $email.val().trim().toLowerCase();
    const password = $password.val();
    let valid = true;

    const nameError = name ? '' : 'Name is required.';
    setError($name, '#nameError', nameError);
    if (nameError) valid = false;

    let emailError = '';
    if (!email) emailError = 'Email is required.';
    else if (!emailPattern.test(email)) emailError = 'Enter a valid email address.';
    else if (existingEmails.includes(email)) emailError = 'This email is already registered.';
    setError($email, '#emailError', emailError);
    if (emailError) valid = false;

    const passwordError = password.length >= 8 ? '' : 'Password must contain at least 8 characters.';
    setError($password, '#passwordError', passwordError);
    if (passwordError) valid = false;

    $('#registrationResult').empty();
    if (valid) {
      $('<p class="success"></p>').text(`Registration successful. Welcome, ${name}!`).appendTo('#registrationResult');
      this.reset();
      // Clear previous validation styling after a successful submission.
      $('#registrationForm input').css('border', '').attr('aria-invalid', 'false');
    }
  });

  // Remove a field's error styling as the user corrects the value.
  $('#registrationForm input').on('input', function () {
    $(this).css('border', '').attr('aria-invalid', 'false');
    $(this).closest('.form-field').find('.field-error').text('');
    $('#registrationResult').empty();
  });
});