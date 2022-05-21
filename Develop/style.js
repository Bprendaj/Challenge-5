$(document).ready(function () {
    //Moment.js code for current date and time
    let NowMoment = moment().format("MMMM Do YYYY");
    let displayDate = document.getElementById("currentDay");
    displayDate.innerHTML = NowMoment;
    let currentHour = moment().format("HH");
  
    //grabs hour from each time slot and compares it to actual time
    $(".time-div").each(function () {
      var timeDiv = $(this).attr("id").split("-")[1];
      
      if (currentHour == timeDiv) {
        $(this).addClass("present");
        $(this).children(".description").addClass("white-text");
      } else if (currentHour < timeDiv) {
        $(this).removeClass("present");
        $(this).addClass("future");
      } else if (currentHour > timeDiv) {
        $(this).removeClass("future");
        $(this).addClass("past");
      }
    });
  
    //grabs values from time and value divs and saves them to local storage
    $(".saveBtn").click(function() {
        for (i = 9 ; i < 18 ; i++){
            var eventElement = $("#" + i).val();
            localStorage.setItem("eventData" + i, eventElement);
            console.log(eventElement);
        }
     });
  
      // Get item from local storage if any
      $("#hour9 .description").val(localStorage.getItem("hour9"));
      $("#hour10 .description").val(localStorage.getItem("hour10"));
      $("#hour11 .description").val(localStorage.getItem("hour11"));
      $("#hour12 .description").val(localStorage.getItem("hour12"));
      $("#hour13 .description").val(localStorage.getItem("hour13"));
      $("#hour14 .description").val(localStorage.getItem("hour14"));
      $("#hour15 .description").val(localStorage.getItem("hour15"));
      $("#hour16 .description").val(localStorage.getItem("hour16"));
      $("#hour17 .description").val(localStorage.getItem("hour17")); 
});

      // locally saved files and content
for (i = 9 ; i < 18 ; i++){
    var localEvents = localStorage.getItem("eventData"+i);
    $("#"+i).val(localEvents);
}