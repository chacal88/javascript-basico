/**
 * Created by chacal on 18/01/17.
 */


var prop1 = prompt('Model ?');
var prop2 = prompt('Name ?');
var prop3 = prompt('Color ?');

var obj = {
    model: prop1,
    name : prop2,
    color: prop3
};

var obj2 = {};

obj2.model = prop1;
obj2.name = prop2;
obj2.color = prop3;

var obj3 = {};

obj3['model'] = prop1;
obj3['name'] = prop2;
obj3['color'] = prop3;


obj.start = function () {
    console.log("I'M READY!")
}

obj.start();


console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj2));
console.log(JSON.stringify(obj3));

