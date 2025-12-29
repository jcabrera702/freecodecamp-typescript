type Food = string

let myName = "Bob";
let numberOfWheels: number = 4;
let isStudent: boolean = false;

type Address = {
  street: string
  city: string
  country: string
}

type Person = {
  name: string
  age: number
  isStudent: boolean
  address?: Address
}

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,

}

let person2: Person = {
  name: "Jill",
  age: 66,
  isStudent: false,
  address:{
    street: "123 Main",
    city: "Anytown",
    country: "USA",
  }
}

//Array data type
let ages: number[] = [100, 101];

let people: Person[] = [person1, person2];
// let people: Array<Person> = [person1, person2]; //same as above just a different syntax 

console.log(`Array of persons: ${people}`);

