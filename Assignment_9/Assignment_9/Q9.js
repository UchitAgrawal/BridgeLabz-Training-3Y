document.addEventListener('DOMContentLoaded', function () {
  // Capture the two independent jQuery references created with noConflict(true) in Q9.html.
  const jq1 = window.jqV1; // jQuery 1.12.4
  const jq2 = window.jqV2; // jQuery 3.7.1

  if (!jq1 || !jq2) {
    document.getElementById('carouselWidget').insertAdjacentHTML('beforeend', '<p class="status">Could not load both jQuery versions. Check your internet connection.</p>');
    return;
  }

  // VERSION 1: rotate carousel slides and highlight the active widget.
  jq1(function () {
    let activeSlide = 0;
    const $slides = jq1('#carouselWidget .carousel-slide');
    window.setInterval(function () {
      $slides.stop(true, true).fadeOut(250);
      activeSlide = (activeSlide + 1) % $slides.length;
      $slides.eq(activeSlide).fadeIn(250);
    }, 2500);

    jq1('.widget').on('click', function (event) {
      if (jq1(event.target).closest('button').length) return;
      jq1('.widget').removeClass('active-widget');
      jq1(this).addClass('active-widget');
    });
    jq1('.activate-widget').on('click', function () {
      jq1('.widget').removeClass('active-widget');
      jq1(this).closest('.widget').addClass('active-widget');
    });
    jq1('#carouselWidget').addClass('active-widget');
  });

  // VERSION 2: manage notification modal open/close behavior.
  jq2(function () {
    const $modal = jq2('#notificationModal');
    jq2('#openModal').on('click', function () { $modal.css('display', 'flex').hide().fadeIn(180); });
    jq2('#closeModal').on('click', function () { $modal.fadeOut(180); });
    $modal.on('click', function (event) {
      if (event.target === this) $modal.fadeOut(180);
    });

    // Attach custom tooltips on hover using the second jQuery version.
    jq2('.tooltip-target').on('mouseenter', function () {
      const text = jq2(this).attr('data-tip') || 'Dashboard action';
      const $tip = jq2('#customTooltip').text(text).show();
      const position = jq2(this).offset();
      $tip.css({ top: position.top + jq2(this).outerHeight() + 8, left: position.left });
    }).on('mouseleave', function () {
      jq2('#customTooltip').hide();
    });
  });
});