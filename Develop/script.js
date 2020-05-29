//variables
var descriptionEl = $('.description').find('textarea');

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
  var workHour = $('#work-hour').text().trim();
  var workTask = $('textarea').val().trim();
  localStorage.setItem(workHour, workTask);
  console.log(workHour, JSON.stringy(workTask));
})

//task variable that holds the task items for each hour
var tasks = JSON.parse(localStorage.getItem('work-schedule')) || [];

//Add work task to hour
$('.description').on('click', 'p', function(taskInput) {
  var task = $(this).text().trim();
  var taskInput = $('<textarea>').val(task);
  $(this).replaceWith(taskInput);
  taskInput.trigger('focus');
});

  // //save button was clicked
  // $('.saveBtn').click(function(e){
  //   //get description value
  //   var text = $('.description').find('textarea').val();

  //   schedule = text;

  //   console.log(schedule);

  //   saveSchedule();
  // })

  // //save schedule to localStorage
  // var saveSchedule = function() {
  //   localStorage.setItem("schedule", JSON.stringify(schedule));
  // };
