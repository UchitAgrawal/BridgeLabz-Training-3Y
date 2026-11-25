$(function () {
  // A product card click highlights it, unless the favorite button was clicked.
  $('.product').on('click', function (event) {
    if ($(event.target).closest('.favorite').length) return;
    const $product = $(this);
    $('.product').removeClass('highlighted');
    $product.addClass('highlighted');

    // Read stock state from the HTML5 data attribute.
    if ($product.attr('data-stock') === 'out') {
      alert(`${$product.find('h3').text()} is currently out of stock.`);
    }
  });

  // Reveal extra information while the pointer is over a product.
  $('.product').on('mouseenter', function () {
    $(this).find('.product-details').stop(true, true).slideDown(160);
  }).on('mouseleave', function () {
    $(this).find('.product-details').stop(true, true).slideUp(160);
  });

  // Toggle the selected class on the favorite icon without triggering the card click.
  $('.favorite').on('click', function (event) {
    event.stopPropagation();
    $(this).toggleClass('selected').text($(this).hasClass('selected') ? '♥' : '♡');
  });
});