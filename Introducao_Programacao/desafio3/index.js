const gets = [1,1,1,1,1];
const gramasPessoas = [300, 1500, 600, 1000, 150];
let arr = []
let limit = gramasPessoas.length;
for(i=0; i < limit; i++){
    arr.push(gets[i]);
}

let r1 = arr.map((value, index) => {
    return value * gramasPessoas[index];
})

let r2 = r1.reduce((previous, current, index, array) => {
    return array[index] = previous + current;
    
});

console.log('r2::', r2 + 225);