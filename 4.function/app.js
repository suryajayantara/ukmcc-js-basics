// Simple Function
function oddEven(number){
    if(number%2 == 0){
        return 'odd'
    }else{
        return 'even'
    }
}
console.log(oddEven(20));

// function as a variable
const oddEvenWithVariable = (number) => {
    if(number%2 == 0){
        console.log('odd');
    }else{
        console.log('even');
    }
}

oddEvenWithVariable(25);

// Constructor Function
function Person(firstName , lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${firstName} ${lastName}`
    }
}

// Init as a variable
const person = new Person('Surya' , 'Jayantara' ,'08-20-2001');
console.log(person.getBirthYear(),person1.getFullName());

// Make Construction Function into a class
class Person{
    constructor(firstName,lastName,dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear = function(){
        return this.dob.getFullYear();
    }
    getFullName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person('Surya' , 'Jayantara' ,'08-20-2001');
console.log(person1);