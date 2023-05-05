var condition = 1>0

if (condition) {
    console.log("Runs....")
}
else {
console.log("Else condition run")
}

var gender = 'M'
if (gender == 'M') {
    console.log('Male')
} else if (gender == 'F') {
    console.log('Female')
} else {
    console.log('Unknown')
}

// Ternary If Statement
// (if you have 1 scenario for if, and 1 for else)

var number = 101
var result = number % 2 == 0 ? 'Even' : 'Odd'
console.log(result)
// 
// if (number % 2 == 0) {
//     console.log("even")
// } else {
//     console.log("odd")
// }

// Switch statement

var gender2 = 'F';

switch(gender2) {
    case "M":
        console.log('Male')
        break;
    case "F":
        console.log('Female')
        break;
    default:
        console.log('Unknown');
} 