/**
 * Created by chacal on 18/01/17.
 */


var input = document.getElementsByClassName('number_val_input');
var generate_btn = document.getElementById('generate_btn');
var body1 = document.getElementsByTagName('body');

var select = document.createElement('select');
body1[0].appendChild(select);


for(var i=0;i < 10;i++){
    var option = document.createElement('option');
    option.id = '#id_' + i;
    option.value = i;
    option.innerHTML = i;

    select.appendChild(option);
}

generate_btn.addEventListener('click', fnGenerate);

function fnGenerate() {
    var value = input[0].value;
    for (i = 0; i < parseInt(value); i++) {
        var inpt = document.createElement('input');
        inpt.id = 'btn_' + i;

        var body = document.getElementsByTagName('body');
        body[0].appendChild(inpt);
    }
}
