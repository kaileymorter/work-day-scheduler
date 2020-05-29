var tasks = [];

//load work tasks


//set current date
$('#currentDay').text(moment().format("dddd, MMM Do YYYY"));

//color-code time blocks
var workHours = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]
auditSchedule();

function auditSchedule(){
  var currentTime = moment().format('H')
  for (var i = 0; i < workHours.length; i++) {
    if (parseInt(workHours[i]) > currentTime) {
      $("#" + workHours[i]).addClass('future');
    } else if (parseInt(workHours[i]) < currentTime) {
      $("#" + workHours[i]).addClass('past');
    }
  }
}

//save work tasks to localStorage
$('.saveBtn').on('click', function(){
  var workHour = $(this).attr('id');
  var workText = $(this).siblings('div.description').children("textarea").val();

  localStorage.setItem(workHour, workText);
})

//get localStorage
$("#9-AM").children("textarea").val(localStorage.getItem("9AM"));

$("#10-AM").children("textarea").val(localStorage.getItem("10AM"));

$("#11-AM").children("textarea").val(localStorage.getItem("11AM"));

$("#12-PM").children("textarea").val(localStorage.getItem("12PM"));

$("#1-PM").children("textarea").val(localStorage.getItem("1PM"));

$("#2-PM").children("textarea").val(localStorage.getItem("2PM"));

$("#3-PM").children("textarea").val(localStorage.getItem("3PM"));

$("#4-PM").children("textarea").val(localStorage.getItem("4PM"));

$("#5-PM").children("textarea").val(localStorage.getItem("5PM"));