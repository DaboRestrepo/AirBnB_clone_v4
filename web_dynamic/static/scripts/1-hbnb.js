#!/usr/bin/node
const $ = window.$;
$(document).ready(() => {
    let checked = []
    if ($('input#checkbox').is(checked)) {
        checked.fill($(this).data('data-id'))
    } else {
        delete checked[$(this).data('data-id')];
    }
    if (checked.length === 0) {
        $('div.amenities h4').text('&nbsp');
    } else {
        $('div.amenities h4').text(checked.join(', '));
    }
})
