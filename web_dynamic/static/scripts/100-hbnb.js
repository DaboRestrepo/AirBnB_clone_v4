$('document').ready(function () {
  const checkedList = {};
  const locationChecked = {};
  const urlStatus = 'http://localhost:5001/api/v1/status/';
  
  $('.amenities input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      checkedList[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete checkedList[$(this).attr('data-id')];
    }

    $('div.amenities > h4').text(Object.values(checkedList).join(', '));
  });

  $('.locations input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      locationChecked[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete locationChecked[$(this).attr('data-id')];
    }

    $('div.locations > h4').text(Object.values(locationChecked).join(', '));
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
  const bothDict = Object.assign({}, checkedList, locationChecked);
  $.ajax({
      type: 'POST',
      url: 'http://localhost:5001/api/v1/places_search',
      data: JSON.stringify({'amenities': Object.keys(bothDict)}),
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
    })
  })
});

