var names = [
    "Alex",
     "Jamila",
      "Joe",
       "Aisha"
    ]

console.log("fori")
for (var i=0; i<names.length; i++) {
    console.log(names[i]);
}
console.log();

console.log("For of");
for (const name of names) {
    console.log(name)
}
console.log();

console.log("forEach");
names.forEach(function(name) {
    console.log(name)
})
console.log();

// While loops

var number=0;
while(number < 5) {
    console.log(number);
    number = number + 1
}

var index = 0;
while(index < names.length) {
    console.log(names[index]);
    index = index + 1;
} 

do {
    console.log("hello");
} while(false)
