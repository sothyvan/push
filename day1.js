//basic
const student = "Taing Sothyvan";
let specialize = "Software Engineering";
const generation = 11;
let deparment = "CS";
let age = 19;
const university = "CADT";

console.log(`Student: ${student} Generation: ${generation}`)
console.log('Student: ' + student + ' Generation: ' + generation)

//to change from string to int
let  num = parseInt(generation);
console.log(typeof(num))

//array
let houses = ["Sindy", "Lundy", "Socheat"];
let destination = houses[0];
console.log(destination);

//adding an element into an array
houses.push("Panha");
let check = houses[3];
console.log(check);

//edit an element in an array
houses[2] = "Bot";
console.log(houses[2])

//length of a string
console.log(destination.length);

//object
let phone = {
    brand: "APPLE",
    model: "13 PRO MAX",
    color: "Black"
}

//modify a property of an object
phone.model = "14 PRO";
console.log(phone.model);

//add a property to an object
phone.user = "Socheat";
console.log(phone.user)

//delete a property
delete phone.user;

//if statement
let x = 2;
if (x % 2 == 0){
    console.log("Even");
} else{
    console.log("Odd");
}

let input = "Bye"
if (input == "hello"){
    console.log("Hi");
} else{
    console.log("Goodbye");
}

//loop
for (let i = 1; i <= 20; i++){
    if (i % 2 != 0){
        let isprime = true
        for (let j = i-1; j > 2; j--){
            if(i % j == 0){
                isprime = false
            }
        }
        if (isprime == true) console.log(i)
    }
}
let j = 0;
while (j < houses.length){
    console.log(houses[j])
    j++;
}

Assingment
let fruits = ["apple", "banana", "cherry", "mango", "orange"]
fruits.push("grape")
for (let i = 0; i < fruits.length; i++){
    if (fruits[i] == "banana"){
        for (let j = i; j < fruits.length; j++){
            fruits[j] = fruits[j+1]
        }
    }
}
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}