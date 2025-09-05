// starting with loops if conditional statements 

function trueorfalse(wasthat){
    if(wasthat){
        return"yes";
    }
    return"no";
}

trueorfalse(true);
console.log(trueorfalse(true));

//  we an use this if loops for nubers aslo like shown below 
function testval(val){
    if(val=='12'){
        return"yes the number is it";
    }
    return"no thenumber is not";
}

console.log(testval(12));// to get the output u need to give it with the function call and the input

// so in the operators there is one more operator called strict equal which is "===" by giving this we are setting to valeu strictly no updates no changes 
function teststrict(val){
    if(val===7){
        return " true";
    }
    return "false";

}

console.log(teststrict('7'));

// not equal to 
function notequal(val){
    if(val != 99){
        return "it not equal";
    }
    return"it is equal"
}
console.log(notequal(99));

// strictly inequality
function stnoteql(val){
    if(val !== 99){
        return "it not equal";
    }
    return"it is equal"
}
console.log(stnoteql(99));

// if else else if operators (<,<=,>,>=,&&-> AND ,||-> LOGICAL OR)
function valif(num){
    if (num < 5){
        return "less then 5";
    }
    else if (num <= 20){
        return "less than 20";
    }
    else if (num >= 30 && num<= 40){
        return " its between 30 and 40";
    }
    else if(num >=40 || num<=50){
        return "its between 40, 50";
    }
    else{
        return "the number is higher";
    }
}

console.log(valif(300));

// switch statement 
function casein(val){       // we are setting a function when called which perform the switch operation 
    let answer = "";               // we can use direct return aslo but just for safeer side i will store the value in answer and return the ans it will take some mmore computational powr 
    switch(val){
        case 1 :                  // different cases 
            answer = "mango";
            break;                // we will break if case 1 is correct  
        case 2 :
            answer = "apple";
            break;
    }
    return answer;
}
console.log(casein(1));

// the if else conditions can be chnaged to switch statements  

/* a simple question in free code camp 
n the casino game Blackjack, a player can determine whether they have an advantage on the
 next hand over the house by keeping track of the relative number of high and 
 low cards remaining in the deck. This is called Card Counting.

Having more high cards remaining in the deck favors the player. 
Each card is assigned a value according to the table below. When the count is positive, 
the player should bet high. When the count is zero or negative, the player should bet low.

Count Change	Cards
+1	           2, 3, 4, 5, 6
0	           7, 8, 9
-1	           10, 'J', 'Q', 'K', 'A'
You will write a card counting function. It will receive a card parameter, 
which can be a number or a string, and increment or decrement the global count 
variable according to the card's value (see table). The function will then return a string 
with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. 
The current count and the player's decision (Bet or Hold) should be separated by a single space.
*/


// destructuring assignments to extract values from objects 
// these are generally updated in es6 they use these for neetly assigning values taken directly from an object 

const temperatu = {
    today : 78,
    yesterday : 77,
    tomorrow : 76,
    nested: {
        name:"sai",
        age:21
    }              // so we created an object of temperature 
}
console.log(temperatu)
// so previously to assigne values to new var we used to write like this 
//const today = temperatu.today;
//const tomorrow = temperatu.tomorrow; // but using these assignments we can write the code as 
//console.log(today,tomorrow);
const{today, tomorrow} = temperatu;
console.log(today, tomorrow); // we did not assigne yesterday we will get error if we add yesterday 

// so in this we can chnage the variable names while assigning the values 

const{today : todayNew,tomorrow : tomorrownew} = temperatu;
console.log(todayNew, tomorrownew);   // they give the same output run it and see 
 
// now to access nester objects and changing the varibale names and assigning data 

const {nested: {name : newname , age: newage}}= temperatu;
console.log(newname,newage);

// using destructuring assignments to assigne variables from arrays 
//There is one key difference between spread operator and array destructuring in
//spread operator it unpacks all the values into a comma separated values but this will assign a variable to it if needed. 

let a=8,b=10;
[b,a]=[a,b];
console.log(a,b);

// we can use this and modify the array and assigne variables to the array and remove them seperately 

function removeelem(list){
    const[, , ...shorterlist] = list;
    return shorterlist
}
// as we can see here the first 2 elements will be removed and the rest of the arr will be returned 
console.log(removeelem([1,2,3,4,5,6,6,7,8]));

// in es6 the object can be turned arrow funvtion 
const createPerson = (name, age, gender) => {

  return {
    name,
    age,
    gender
  };

};

// using es6 we can remove the function and colen togenther when definign function in object 
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
console.log(person);
// before removing after removing 
const persn = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
console.log();


// search and place check the first leter of the before alphabet 
// if uper case the replaced letr should be uppeer if not it should be lower

function myReplace(str, before, after) {
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1)
  } else {
    after = after[0].toLowerCase() + after.substring(1)
  }
  return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

// template literals this is used for creting complex strings easier it allowes us to 
// write miltiline strings to use string interpolation features to create strings 
// syntax
const perssson = {
    name:"saishashidhar",
    age:21
}
const greating=`my name is ${perssson.name}!
iam ${perssson.age} years young`;
console.log(greating);

// this is how a template literals work 

// declarative function in es6 

let positon = (x,y) = ({x,y});
// declarative with functions 

const data = {
    name:"sai",
    sayhello () {
        return `hello myname is ${data.name}.`;
    }// instead of writing this whole line we can remove the colan and function and use it directlyu sayhello : function(){}
}
console.log(data.sayhello());

// using class syntax to define a constructor function 
// this is where implisite and explecite function comes in 

// this is explecite function we we user are giving it the logic to follow 
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}
const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();
