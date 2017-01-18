/**
 * Created by chacal on 18/01/17.
 */



var click_me = document.getElementById('click_me');
click_me.addEventListener('click', fnClickMe);

function fnClickMe() {
    alert('click me')
}

function validateNumber() {
    var number = document.getElementById('number_val').value;

    if (isNaN(number) || (number >= 1 && number <= 10)) {
        alert('input is not valid')
    } else {
        alert('input is valid');
    }

}

function over(obj) {
    console.log('over me', obj.innerHTML);
    obj.innerHTML = 'FUCK';
    obj.style.background = "#fffffff";
}


function overOut(obj) {
    console.log('over me', obj.innerHTML);
    obj.innerHTML = 'Hi';
    obj.style.background = "#fff000";
    obj.style.color = "#ccc";
}