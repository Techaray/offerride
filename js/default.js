 $(document).ready(function(){

  $("#offer_ride_form").submit(function() {

    var data = {
      'person_name': $('#person_name').val(),
      'departure': $('#departure').val(),
      'arrival': $('#arrival').val(),
      'chandigarh': $('#chandigarh').val(),
      'departure_date': $('#departure_date').val(),
      'return_date': $('#return_date').val(),
      'stopovers': $('#stopovers').val(),
      'price': $('#price').val(),
      'ride_detail': $('#ride_detail').val(),
      'no_of_seats': $('#no_of_seats').val(),
      'max_luggage_size': $('#max_luggage_size').val(),
      'leave_at': $('#leave_at').val(),
      'detaur': $('#detaur').val()
      };

    $.ajax({
          type: 'GET',
          url: '//goyaar.testingwebsitedesign.com/saveApiRide',
          crossDomain: true,
          data: data,
          cache: false,
          datatype: 'jsonp',

          success: function(data) {
          alert('Data Added');
          }
        });

    return false;
  });
  
 });