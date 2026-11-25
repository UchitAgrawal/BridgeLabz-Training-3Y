$(function () {
  const $banners = $('#bannerStage .offer-banner');
  let currentIndex = 0;

  // Hide the specific banner whose own Hide button was clicked.
  $('#bannerStage').on('click', '.hide-banner', function () {
    $(this).closest('.offer-banner').stop(true, true).hide();
  });

  $('#showBanners').on('click', function () {
    $banners.stop(true, true).show();
    $('#bannerStatus').text('All banners are visible.');
  });
  $('#slideUp').on('click', function () { $banners.stop(true, true).slideUp(350); });
  $('#slideDown').on('click', function () { $banners.stop(true, true).slideDown(350); });
  $('#fadeOut').on('click', function () { $banners.stop(true, true).fadeOut(350); });
  $('#fadeIn').on('click', function () { $banners.stop(true, true).fadeIn(350); });

  // Automatically display one banner at a time and rotate every five seconds.
  function rotateBanner() {
    const visibleCandidates = $banners.filter(function () {
      return !$(this).data('manually-hidden');
    });
    if (!visibleCandidates.length) return;

    $banners.stop(true, true).fadeOut(250);
    currentIndex = (currentIndex + 1) % $banners.length;
    let $next = $banners.eq(currentIndex);
    let attempts = 0;
    while ($next.data('manually-hidden') && attempts < $banners.length) {
      currentIndex = (currentIndex + 1) % $banners.length;
      $next = $banners.eq(currentIndex);
      attempts++;
    }
    if (!$next.data('manually-hidden')) $next.delay(260).fadeIn(350);
  }

  // Keep track of banners hidden with their own Hide buttons.
  $('#bannerStage').on('click', '.hide-banner', function () {
    $(this).closest('.offer-banner').data('manually-hidden', true);
  });
  $('#showBanners').on('click', function () { $banners.removeData('manually-hidden'); });

  // Start with one banner visible for a clean rotating-banner presentation.
  $banners.hide().eq(0).show();
  window.setInterval(rotateBanner, 5000);
});