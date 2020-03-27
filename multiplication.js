// This function will make the multiplication with the dimensions num x num
var makeProblem = function () {
    $(".num1").show();
    $(".num1").show();

	// determine two random numbers for the missing multiplication value
	num1 = Math.floor((Math.random() * 100) + 1);
    num2 = Math.floor((Math.random() * 10) + 1);
    
    $(".num1").text(num1);
    $(".num2").text(num2);

} 

var isClicked = function (tag) {
    $(tag).click(function(){
        return true;
    });

}
makeProblem();

var input = 60
$("div.counter").html(input + " Seconds left");
// create a timer that starts at input and counts down to 0 seconds
var timer = setInterval(function () { 
    // decrement the timer
    input = input - 1;
    // have the timer display how many seconds the user has left
    $("div.counter").html(input + " Seconds left");
    // if the timer has reached 0 seconds
    if (input === 0) { 
        // clear the timer
        clearInterval(timer);
        // get the user's answer for the missing multiplication value
        var userAnswer = $("#answer").val();
        // if the user hasn't inputted anything, display "Time's Up!"
        if (userAnswer == "") {
            output = "Time's Up!";
            color = "black";
        }
        // if the user has inputted the correct answer, display "Correct!"
        else if (userAnswer == (num1*num2)) {
            output = "Correct!";
            color = "green";
        
        } else { // if the user has inputted the wrong answer, display "Wrong!"
            output = "Wrong!";
            color = "red";
        }

        $("div.counter").css("margin-top", "100px");
        // output the correct response to the user's answer
        $("div.counter").css("color", color);
        $("div.counter").html(output);

        // have the response show for 4 seconds before returning to the main page
        count = 4
        var timer2 = setInterval(function () {
            count = count - 1;
            if (count === 0) {
                // hide the timer
                $("div.counter").hide();
                // show the main menu image again
                $("#userInput").val("");
                location.reload()
            }
        }, 1000);
    }
}, 1000);





