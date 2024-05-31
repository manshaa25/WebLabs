
const n = 'John';
console.log(`Hello, ${n}!`);

let no_of_friends = 4;
console.log(`I have ${no_of_friends} friends`);
//console.log(no_of_friends == 0 ? "no" ; no_of_friends`);

let obj = {
    na : "aiman",
    gender : "female",
    country_code : "92",
    age : 20
}
let obj2 = {...obj}; // spirit operator in objects
// spirt operator in array [...obj]
obj.na = "ume-aiman";
console.log(obj);
console.log(obj2);

const {na , age}=obj;
console.log({na , age});

console.log('Starting setTimeout example...');
setTimeout(() => {console.log('This message will be displayed after 2 seconds.');}, 2000); // 2000 milliseconds = 2 seconds
console.log('setTimeout example scheduled.')
