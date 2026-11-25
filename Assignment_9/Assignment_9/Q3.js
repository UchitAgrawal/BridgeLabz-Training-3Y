$(function () {
  // A question click opens or closes only its own answer.
  $('.faq-question').on('click', function () {
    $(this).next('.faq-answer').stop(true, true).slideToggle(180);
  });

  // Hover styling is applied with jQuery events.
  $('.faq-question').on('mouseenter', function () {
    $(this).css({ color: '#2457c5', backgroundColor: '#eef4ff' });
  }).on('mouseleave', function () {
    $(this).css({ color: '', backgroundColor: '' });
  });

  // Double-clicking any question collapses every answer.
  $('.faq-question').on('dblclick', function () {
    $('.faq-answer').stop(true, true).slideUp(180);
  });

  // Focus on an answer input highlights the question in the same FAQ item.
  $('.faq-answer input').on('focus', function () {
    $(this).closest('.faq-item').find('.faq-question').css('background-color', '#fff2cc');
  }).on('blur', function () {
    // Reset the parent question's background after the input loses focus.
    $(this).closest('.faq-item').find('.faq-question').css('background-color', '');
  });
});