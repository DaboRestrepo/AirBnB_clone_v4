$('document').ready(function () {
  const checkedList = {};
  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      checkedList[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete checkedList[$(this).attr('data-id')];
    }

    $('div.amenities > h4').text(Object.values(checkedList).join(', '));
  });
});
