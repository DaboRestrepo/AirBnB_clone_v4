#!/usr/bin/node
const $ = window.$;
$('document').ready(() => {
  const checkedList = {};
  $('input[type="checkbox"]').change(() => {
    if ($(this).is(':checked')) {
      checkedList[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete checkedList[$(this).attr('data-id')];
    }
    if (Object.values(checkedList).length === 0) {
      $('div.amenities h4').text('&nbsp;');
    } else {
      $('div.amenities h4').text(Object.values(checkedList).join(', '));
    }
  });
});
