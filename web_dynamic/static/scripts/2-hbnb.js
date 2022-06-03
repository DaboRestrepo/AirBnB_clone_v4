$('document').ready(function () {
  const checkedList = {};
  const url = 'http://localhost:5001/api/v1/status/';

  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      checkedList[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete checkedList[$(this).attr('data-id')];
    }

    $('div.amenities > h4').text(Object.values(checkedList).join(', '));
  });

  $.get(url, function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
});
