//current day
$('#currentDay').text(moment().format("dddd, MMMM DD, YYYY"));

//time blocks

//edit hour schedule
$('.description').on('click', 'p', function() {
    var text = $(this).text().trim();
    var textInput = $('<textarea>').val(text);
    $(this).replaceWith(textInput);
    textInput.trigger('focus');
  });