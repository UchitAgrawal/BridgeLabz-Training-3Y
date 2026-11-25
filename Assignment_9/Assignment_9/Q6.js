$(function () {
  function showMessage(message) {
    // Insert a fresh status message into the DOM after each action.
    $('<p class="status subscription-message"></p>').text(message).appendTo('#subscriptionMessages');
  }

  $('#subscribe').on('click', function () {
    $('#notificationStatus').text('Notifications are enabled.').css({ backgroundColor: '#effaf2', color: '#176b32' });
    showMessage('You have successfully subscribed to notifications.');
  });

  $('#unsubscribe').on('click', function () {
    $('#notificationStatus').text('Notifications are disabled.').css({ backgroundColor: '#eef6ff', color: '#174ea6' });
    showMessage('You have unsubscribed from notifications.');
  });

  function topicClickHandler() {
    const $button = $(this);
    const isSubscribed = $button.data('subscribed') === true;
    $button.data('subscribed', !isSubscribed)
      .toggleClass('secondary', !isSubscribed)
      .text(isSubscribed ? 'Subscribe to topic' : 'Subscribed ✓');
    showMessage(isSubscribed ? 'Topic subscription removed.' : `Subscribed to ${$button.closest('.topic').find('span').text()}.`);
  }

  // Attach a direct click handler to every existing topic button.
  $('.topic-subscribe').on('click', topicClickHandler);

  $('#addTopic').on('click', function () {
    const topicName = $('#newTopic').val().trim();
    if (!topicName) {
      alert('Please enter a topic name.');
      return;
    }
    const $topic = $('<div class="topic"></div>');
    $('<span></span>').text(topicName).appendTo($topic);
    const $actions = $('<div class="row"></div>').appendTo($topic);
    const $button = $('<button class="topic-subscribe">Subscribe to topic</button>').appendTo($actions);
    $('<button class="remove-topic danger">Remove</button>').appendTo($actions);
    // Dynamically-added buttons receive the same .on() click handler.
    $button.on('click', topicClickHandler);
    $('#topicList').append($topic);
    $('#newTopic').val('');
    showMessage(`Added the ${topicName} topic.`);
  });

  // Remove a topic's event handler with .off() before removing that topic from the DOM.
  $('#topicList').on('click', '.remove-topic', function () {
    const $topic = $(this).closest('.topic');
    $topic.find('.topic-subscribe').off('click', topicClickHandler);
    const name = $topic.find('span').text();
    $topic.remove();
    showMessage(`Removed the ${name} topic and detached its click event.`);
  });
});