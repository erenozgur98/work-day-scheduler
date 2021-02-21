var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));
var time = moment();
$("#currentTime").text(time.format("LT"));

var hour = moment().hour();
console.log(hour);

function start() {
    for (var i = 9; i < 18; i++) {
        if (i < hour) {
            $("#" + i).addClass("past");
        } else if ( i === parseInt(hour)) {
            $("#" + i).addClass("present");
        } else {
            $("#" + i).addClass("future");
        }
        var hourValue = localStorage.getItem("hour"+i);
        if (hourValue) {
            $("#" + i).val(hourValue);
        }
    }
}
start();

$(".saveBtn").on("click", function () {
    var input = $(this).attr("id").split("-")[1];
    var value = $("#" + input).val().trim();

    if (value.length) {
      localStorage.setItem("hour"+input, value);  
    }
})

$(".clearBtn").on("click", function() {
    var clearInput = $(this).attr("id").split("-")[1];
    var clearValue = $("#" + clearInput).val().trim();
    localStorage.removeItem(clearValue);
    console.log(clearInput, clearValue);
})

























