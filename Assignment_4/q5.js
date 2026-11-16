// Q5: Movie Ticket Booking (Objects + RegExp)

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("bookingName");
  const emailInput = document.getElementById("bookingEmail");
  const seatsInput = document.getElementById("seats");

  const nameValid = /^[A-Za-z]+$/.test(nameInput.value.trim());
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
  const seatsValue = Number(seatsInput.value);
  const seatsValid = Number.isInteger(seatsValue) && seatsValue >= 1 && seatsValue <= 10;

  function mark(input, errorId, valid, errorText) {
    input.classList.toggle("valid", valid);
    input.classList.toggle("invalid", !valid);
    document.getElementById(errorId).textContent = valid ? "" : errorText;
  }

  mark(nameInput, "bookingNameError", nameValid, "Name must contain alphabets only.");
  mark(emailInput, "bookingEmailError", emailValid, "Enter a valid email address.");
  mark(seatsInput, "seatsError", seatsValid, "Choose a whole number from 1 to 10.");

  const ticketDetails = document.getElementById("ticketDetails");
  if (nameValid && emailValid && seatsValid) {
    const booking = {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      seats: seatsValue
    };

    ticketDetails.textContent =
      `Booking Confirmed!\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;
  } else {
    ticketDetails.textContent = "Please fix the errors above and try again.";
  }
});
