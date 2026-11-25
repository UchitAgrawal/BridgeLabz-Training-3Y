$(function () {
  let postNumber = 5;

  $('#addPost').on('click', function () {
    postNumber++;
    // .append() inserts the new post at the end of the list.
    $('<article class="post"><h3></h3><p></p></article>')
      .find('h3').text(`New Blog Post ${postNumber}`).end()
      .find('p').text('This post was added dynamically using jQuery append().').end()
      .appendTo('#postList');
  });

  $('#prependPost').on('click', function () {
    // .prepend() inserts a featured post before all existing posts.
    const $featured = $('<article class="post"><span class="pill">FEATURED</span><h3></h3><p></p></article>');
    $featured.find('h3').text('Featured: The Future of Interactive Web Experiences');
    $featured.find('p').text('A featured post is inserted at the top with jQuery prepend().');
    $('#postList').prepend($featured);
  });

  $('#removeLast').on('click', function () {
    const $lastPost = $('#postList .post').last();
    if ($lastPost.length) $lastPost.remove();
    else alert('There are no posts left to remove.');
  });

  function makeTag() {
    const text = $('#postTag').val().trim();
    if (!text) {
      alert('Enter a tag first.');
      return null;
    }
    return $('<span class="post-tag"></span>').text(`#${text}`);
  }

  $('#tagBefore').on('click', function () {
    const $tag = makeTag();
    // .before() places the tag immediately before the first post.
    if ($tag) $('#postList .post').first().before($tag);
  });

  $('#tagAfter').on('click', function () {
    const $tag = makeTag();
    // .after() places the tag immediately after the first post.
    if ($tag) $('#postList .post').first().after($tag);
  });

  $('#highlightPosts').on('click', function () {
    const keyword = $('#keyword').val().trim();
    $('.post').removeClass('highlighted');
    if (!keyword) {
      alert('Enter a keyword to highlight.');
      return;
    }
    // Dynamically scan each post's text and highlight those containing the keyword.
    $('.post').filter(function () {
      return $(this).text().toLowerCase().includes(keyword.toLowerCase());
    }).addClass('highlighted');
  });
});