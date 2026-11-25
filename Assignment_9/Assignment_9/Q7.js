$(function () {
  const $courses = $('.course');
  // Save original text for both title and description so every search starts clean.
  $courses.each(function () {
    $(this).find('.course-title, p').each(function () {
      $(this).data('original-text', $(this).text());
    });
  });

  function escapeRegExp(value) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
  }

  function filterCourses() {
    const query = $('#courseSearch').val().trim();
    let matchedCount = 0;

    $courses.each(function () {
      const $course = $(this);
      const $textElements = $course.find('.course-title, p');
      const searchableText = $textElements.map(function () {
        return $(this).data('original-text');
      }).get().join(' ');
      const matches = !query || searchableText.toLowerCase().includes(query.toLowerCase());

      // Toggle visibility for courses that do not match the query.
      $course.toggle(matches);
      if (matches) matchedCount++;

      // Restore original text, then highlight matched title/description text with .css().
      $textElements.each(function () {
        const $element = $(this);
        const originalText = $element.data('original-text');
        $element.text(originalText);
        if (query && originalText.toLowerCase().includes(query.toLowerCase())) {
          const regex = new RegExp(`(${escapeRegExp(query)})`, 'ig');
          $element.html(escapeHtml(originalText).replace(regex, '<mark>$1</mark>'));
          $element.find('mark').css({ backgroundColor: '#ffe08a', color: '#3b2f12' });
        }
      });
    });

    $('#courseCount').text(query ? `${matchedCount} of ${$courses.length} courses match “${query}”.` : `Showing all ${$courses.length} courses.`);
  }

  // keyup provides immediate, real-time filtering as the visitor types.
  $('#courseSearch').keyup(filterCourses);
  $('#clearSearch').on('click', function () {
    $('#courseSearch').val('');
    filterCourses();
    $('#courseSearch').trigger('focus');
  });
});