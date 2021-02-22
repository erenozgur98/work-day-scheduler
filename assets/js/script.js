// setting todays date and time
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
var time = moment();
$("#currentTime").text(time.format("LT"));

// getting the current hour for the user
var hour = moment().hour();

// looping through each time to set the color it needs to be
function start() {
    for (var i = 9; i < 18; i++) {
        if (i < hour) {
            $("#" + i).addClass("past");
        } else if ( i === parseInt(hour)) {
            $("#" + i).addClass("present");
        } else {
            $("#" + i).addClass("future");
        }
        var hourValue = localStorage.getItem("hour" + i);
        if (hourValue) {
            $("#" + i).val(hourValue);
        }
    }
}
start();

// when clicked on save button it'll save the input value in the <textarea> to local storage
$(".saveBtn").on("click", function () {
    var input = $(this).attr("id").split("-")[1];
    var value = $("#" + input).val().trim();

    if (value.length) {
      localStorage.setItem("hour" + input, value);  
    }
})

// when clicked on clear button it'll clear the input valie in the <textarea> from local storage
$(".clearBtn").on("click", function() {
    var clearInput = $(this).attr("id").split("-")[1];
    var clearValue = $("#" + clearInput).val().trim();
    localStorage.removeItem("hour" + clearInput, clearValue);
    location.reload();
})

























