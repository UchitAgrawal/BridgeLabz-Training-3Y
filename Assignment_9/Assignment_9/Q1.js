$(function () {
  const $greeting = $('#greeting');
  const $welcomeMessage = $('#welcomeMessage');
  const quotes = [
    'Great things are done by a series of small things brought together.',
    'Believe you can and you are halfway there.',
    'Every day is a fresh opportunity to learn and improve.'
  ];

  // Return a greeting that matches the visitor's local time.
  function getTimeGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  }

  function renderGreeting() {
    const name = $('#visitorName').val().trim() || 'Guest';
    $greeting.text(`${getTimeGreeting()}, ${name}!`);
  }

  // Display a personalized greeting as soon as the page is ready.
  renderGreeting();
  $('#visitorName').on('input', renderGreeting);

  $('#changeGreeting').on('click', function () {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    $greeting.text(quote);
  });

  $('#toggleWelcome').on('click', function () {
    $welcomeMessage.toggle();
    $(this).text($welcomeMessage.is(':visible') ? 'Hide Welcome Message' : 'Show Welcome Message');
  });

  // Support mouse click and keyboard activation for the greeting.
  $greeting.on('click keypress', function (event) {
    if (event.type === 'click' || event.key === 'Enter' || event.key === ' ') {
      if (event.type === 'keypress') event.preventDefault();
      alert('Thanks for visiting! Have a wonderful day.');
    }
  });
});