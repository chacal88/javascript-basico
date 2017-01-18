/**
 * Created by chacal on 18/01/17.
 */



var age = prompt('How old are you?');
var ageparser = parseInt(age);

if (age >= 18) {
    console.log("You are authorized")
} else {
    console.log("You are not authorized")
}

switch (true) {
    case (ageparser >= 18):
        console.log("You are authorized");
        break;
    case (ageparser < 18):
        console.log("You are not authorized");
        break;
    default:
        console.log("Default function");
        break;

}
