var person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    adress: {
        city: "London",
        postCode: "SW9"
    }
};
console.log(person.firstName);
console.log(person.age);
console.log(person.adress.city);
console.log(person);
console.log(Object.values(person));
console.log(Object.keys(person));
console.log(JSON.stringify(person));