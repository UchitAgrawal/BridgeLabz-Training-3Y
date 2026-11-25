$(function () {
  // Clicking a manager highlights only employees whose data-manager matches that manager.
  $('.employee[data-manager="none"]').on('click', function (event) {
    if ($(event.target).closest('.contact-info').length) return;
    const managerId = $(this).data('employee');
    $('.employee').removeClass('highlighted');
    $(`.employee[data-manager="${managerId}"]`).addClass('highlighted');
  });

  // .next() selects the contact-info panel immediately after each employee heading.
  $('.employee').on('mouseenter', function () {
    $(this).children('.employee-heading').next('.contact-info').stop(true, true).slideDown(120);
  }).on('mouseleave', function () {
    $(this).children('.employee-heading').next('.contact-info').stop(true, true).slideUp(120);
  });

  // .children() selects direct employee children within the clicked department only.
  $('.department-button').on('click', function () {
    $('.employee').removeClass('highlighted');
    $(this).closest('.department').children('.employee').addClass('highlighted');
  });

  // A random employee is selected; .siblings() highlights their colleagues in the same department.
  $('#randomEmployee').on('click', function () {
    const $employees = $('.employee');
    const $random = $employees.eq(Math.floor(Math.random() * $employees.length));
    $('.employee').removeClass('highlighted');
    $random.addClass('highlighted').siblings('.employee').addClass('highlighted');
  });

  // Use .parent() to reach the panel and .find() to collapse/expand all team entries.
  $('#collapseTeam').on('click', function () {
    const $panel = $(this).parent().parent().find('#teamPanel');
    $panel.find('.department').toggle();
    $(this).text($panel.find('.department:visible').length ? 'Collapse Team' : 'Expand Team');
  });
});