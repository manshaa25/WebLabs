function applyFunction(array, func) {

    return array.map(func);
}

let numbers = [1, 2, 3];
let doubledNumbers = applyFunction(numbers, x => x * 2);

console.log(doubledNumbers);
