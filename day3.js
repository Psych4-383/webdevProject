// console.log('JS file linked');

// ARRAY METHODS
let arr = [1, 2, 3, 5, 7];
arr.forEach(e => {console.log(e*e)});
arr.reverse();
// console.log(arr);

let str = 'random stringggg';
// console.log(str.split('i'));

let obj = {
    "name":"pb",
    "age":12,
    "class":8
};
// for (const key in obj){
//     console.log(key, obj[key]);
// };

let randomArray = [1, 'uhh', 1.1, true, '22222'];
console.log(randomArray[randomArray.length-1]); // no arry[-1] in JS ;(

function lowercase(str){
    return str.toLowerCase();
};

console.log(lowercase('kOnNiChIwA'));

console.log(JSON.stringify(obj));
console.log(typeof randomArray); // aaaah why does that return object!? https://stackoverflow.com/questions/12996871/why-does-typeof-array-with-objects-return-object-and-not-array

localStorage.setItem('key', 'randomValueButNotSoRandomAnymore');
const val = localStorage.getItem('key');
// console.log(val);

// localStorage.clear() // this is a sad command but useful