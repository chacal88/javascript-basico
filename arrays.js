/**
 * Created by chacal on 18/01/17.
 */



var ft = new Array(1,2,3,4,5,6,7,8,9,0);
console.log('new array',ft);
var ft = [1,2,3,4,5,6,7,8,9,0];
console.log('array []',ft);

var ft = [
    'Kaue',
    'João',
    'Felipe'
];

console.log('array []',ft);
ft.push('Karin');

console.log('push',ft);
ft.pop();

console.log('pop',ft);

ft.unshift('Karin');

console.log('unshift',ft);

console.log('console indice 0', ft[0]);

ft.shift();

console.log('shift',ft);

ft.slice(0,1);

console.log('slice 0,1',ft);

console.log('index of',ft.indexOf('João'));

var ft1 = ['cabritinha'];

var result = ft.concat(ft1);

console.log('concat result',result);

