
// Function that checks if the two strings that the user enters are strictly equal
function checkEquality() {
    // on event the button is clicked
        var firstString = document.getElementById("str1").value;
        var secondString = document.getElementById("str2").value;
        if (firstString === secondString) {
            // Change the text on the div to say that they are equal
            document.getElementById("msg").innerHTML = "The two strings are strictly equal";
        } else {
            // Change the text on the div to say that they are not equal
            document.getElementById("msg").innerHTML = "The two strings are not equal";
        }
}

function checkSumLength() {
    var firstString = document.getElementById("str1").value;
    var secondString = document.getElementById("str2").value;
    document.getElementById("msg").innerHTML = firstString.length + secondString.length;
}

document.getElementById("check-button").addEventListener("click", checkEquality);
document.getElementById("sum-button").addEventListener("click", checkSumLength);