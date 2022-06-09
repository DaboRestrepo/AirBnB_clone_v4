$('document').ready(function () {
  const checkedList = {};
  const stateChecked = {};
  const cityChecked = {};
  const bothDict = {};
  const urlStatus = 'http://localhost:5001/api/v1/status/';

  $('.locations .popover h2 input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      stateChecked[$(this).attr('data-id')] = $(this).attr('data-name');
      bothDict[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete stateChecked[$(this).attr('data-id')];
      delete bothDict[$(this).attr('data-id')];
    }
    $('div.locations > h4').text(Object.values(bothDict).join(', '));
  });

  $('.locations .popover input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      cityChecked[$(this).attr('data-id')] = $(this).attr('data-name');
      bothDict[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete cityChecked[$(this).attr('data-id')];
      delete bothDict[$(this).attr('data-id')];
    }
    $('div.locations > h4').text(Object.values(bothDict).join(', '));
  });

  $('.amenities input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      checkedList[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete checkedList[$(this).attr('data-id')];
    }

    $('div.amenities > h4').text(Object.values(checkedList).join(', '));
  });
  $.get(urlStatus, function (data) {
    if (data.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });

  $.ajax({
    type: 'POST',
    url: 'http://localhost:5001/api/v1/places_search/',
    data: '{}',
    dataType: 'json',
    contentType: 'application/json',
    success: function (data) {
      $.each(data, function (i, v) {
        $(`<article>
        <div class="title_box">
        <h2>${v.name}</h2>
        <div class="price_by_night">$${v.price_by_night}</div>
        </div>
        <div class="information">
        <div class="max_guest">${v.max_guest} Guest</div>
        <div class="number_rooms">${v.number_rooms} Bedroom</div>
        <div class="number_bathrooms">${v.number_bathrooms} Bathroom</div>
        </div>
              <div class="description">
          ${v.description}
          </div>
      </article>`).appendTo('.places');
      });
    }
  });
  $('.filters > button').click(function () {
    $('.places > article').remove();
    $.ajax({
      type: 'POST',
      url: 'http://localhost:5001/api/v1/places_search',
      data: JSON.stringify({ amenities: Object.keys(checkedList), states: Object.keys(stateChecked), cities: Object.keys(cityChecked) }),
      dataType: 'json',
      contentType: 'application/json',
      success: function (data) {
        $.each(data, function (i, v) {
          $(`<article>
          <div class="title_box">
          <h2>${v.name}</h2>
          <div class="price_by_night">$${v.price_by_night}</div>
            </div>
            <div class="information">
            <div class="max_guest">${v.max_guest} Guest</div>
            <div class="number_rooms">${v.number_rooms} Bedroom</div>
            <div class="number_bathrooms">${v.number_bathrooms} Bathroom</div>
          </div>
          <div class="description">
            ${v.description}
                </div>
                </article>`).appendTo('.places');
        });
      }
    });
  });
});
