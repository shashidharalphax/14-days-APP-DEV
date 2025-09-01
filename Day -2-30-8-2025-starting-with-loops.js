// 30-9-2025 

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

so here what they are asking is where these cards come dispplayt the score which helps the user win 
we will be writing the code for it */

let count = 0; //initially we are puting count to 0 because we need out count to increment and decrement with every operation 

function cc(card){
    switch(card){
    case 2:                  // for all the cases below the points are set if 2,3 these numbers come the count increments 
    case 3:                  // if 789 comes its nothing so we are not considering it  
    case 4:                  // when 10,k,j comes its -1 
    case 5:                  // so now beloew we will give a if condetion saying if count > 0 return the value of count and place the bet 
    case 6:                  // if the value of count lesss then 0 we will return the count and hold the bet 
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break
    }
    if(count > 0){
        return count + " Bet"; // so now beloew we will give a if condetion saying if count > 0 return the value of count and place the bet 
    }else{
        return count + " Hold"; // if the value of count lesss then 0 we will return the count and hold the bet 
    }
    return count;
}

console.log(cc(2),cc(3),cc('K'),cc(6)); // have a dought in the output ask meghana and clarify about it 



// OBJECT 
let dog ={
    name : "Oscor",
    "legs dog" : 4,
    tail : 1,
    friends : ["bidinayi",'malik']
}
// this is how an object is defined and 
console.log(dog);
dog.tail=21;// updating of the 
console.log(dog);
//dog.preventExtensions();// what does this do is it prevents data from being added but we can modify and delete the data which is already present 
dog["legs dog"] = 3;// to ubdate the property values if there haev spaces in between we use the [] and change it as done here 
console.log(dog)
delete dog.name;
console.log(dog);

// this is like one of the problem which is intresent initally it was in switch statements then changed it to object 
function phoneticLookup(val) {
  let result = "";

  let lookup={
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank"
  }
  result = lookup[val]; // i did not add thsi line before i needed to add it dont make this mistake again 

  return result;
}

console.log(phoneticLookup("charlie"));
// for .hasOwnProperty 

function checkObj(obj, checkProp) { //we need to add values to obj,checkProp to run this code we need to define them 
 
  if (obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }else{
    return "Not Found"
  }
  

}

// 1-9-2025

//while loop 

const Arr = [];
let i = 5;
while(i>=0){ // we are checking if the i value is geater then 0 so now we push it to the array and 
    Arr.push(i);// we decrement the i value now we have a desending order value from 5 - 0 
    i--;
}
console.log(Arr)

// for loops 

let Myarr = [];// we are assinging an emepty ARRY to the variable Myarr
for(let i=0;i<6;i++){// in the for loop we gave a condetion stating i=0 so start with 0, i<6 dont cross 6 not add 6, increment 1 everytime 
    Myarr.push(i);// here it pushes the i value into the emepty array for every execgution until it reaches 5 the the loop stops 
}
console.log(Myarr);

// printing of odd numbers from 1-9 using for loop 

Myarr = [];
for (let i =1;i<10;i+=2){//to preint them in desending order for(let i=9;i>0;i-=2) using this we can print it in desenting order 
    Myarr.push(i);
}
console.log(Myarr)

// program to add the numbers in the array using a variable in for loop 

Myarr = [2,3,5,4,6]; // the array is declared 
let tot = 0; // the variable value is assigned 0 initially 

for(let i=0;i<Myarr.length;i++){
    tot +=Myarr[i];
}
console.log(tot)

// multiplication of an arry using for with function 

function multiply(arr){
    let product = 1;
    for(i=0;i<arr.length;i++){
        for(j=0;j<arr[i].length;j++){
            product *= arr[i][j];
        }
    }
    return product;
}

console.log(multiply([[1,2],[3,4],[5,6,7]]))

// so the next loop is do while loop we call it do while because any condition is 
// given first  it will execegute one line of code then check for the condition and runs the rest of the 
// code no mater what it will run the do part of the code then check for the conditin and move forward 

Myarr = [];
i = 10;
do{
    Myarr.push(i); // so it first runs this line of code and not it pushes 10 value in the array
    i++ // now it increments the i value to 11
}while(i<5); // now it will check for the consition and obsely 11 is not < 5 so it will stop running but we have 10 in the array 
console.log(Myarr)

// Math.floor() geerates floor number for the given value
console.log(Math.floor(5.0))
//Math.random() generated the random decimal number between 0 & 1 but never gives 0 or 1 
console.log(Math.random())

// parseInt() takes a string and returns an integer 
console.log(parseInt("009"))

//parseInt() ading radix this variable says that the string which is given is in binary system give the return value in intiger 
console.log(parseInt("111111111",2))

// ternary conditional statement -> condition? expresionIftrue : expresionIfFalse

console.log(1==2? "true":"False"); // we can use this for all the operations but only for single return statements not for all 

// for multiple conditiones 
function termul(num){
    return num == 10? "Equal": num>10?"greater":"lesser";
}
console.log(termul(10));
// to check if the number is positive negative or zero 

function termu(num){
    return num==0? "zero" : num>0? "positive" : "negetive";
}
console.log(termu(-10));

// using recursion to create a countdown 

function countdown(n){
    return n<1? [] : [n, ...countdown(n-1)]; // for countup just add n+1 we only use ... because it take an iterable and spread the values in it out continuesly  
}
console.log(countdown(10));

// using recursion to create a range of numbers 

function rangeofnum(fnum,lnum){
    return lnum<fnum? [] : [...rangeofnum(fnum,lnum-1),lnum];
 };
console.log(rangeofnum(1,15456));

/* es6 update 
starting with var and let 
if we assignr var before a variable and use it if it is not diclared also we ill not have any issue 
but in let we will have an issue  the example programs are given below */

var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());

/* the above one is using var and we can see we have an error at variabe i the below code shows the let variable 
so in the above program the output will be 3 not 2 because the value assigned to i was updated and printNumTwo will return the global i not the 
value i had when the function was created in the loop 
the below code Here the console will display the value 2, and an error that i is not defined. 
i is not defined because it was not declared in the global scope. It is only declared within the for loop statement. 
printNumTwo() returned the correct value because three different i variables with unique values (0, 1, and 2) were created by the 
let keyword within the loop statement.
*/ 

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
console.log(i);


//Object.freeze so while using const we have seen that after the data is given still it is mutable so we use the Object.freeze to 
// totally freeze the value given to it exampel code is writen below 
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS );
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
console.log(PI);

// Arrow Function in js we generally dont need to name our functions as an argument to another function. insted we create a inline function 
// we dont need to name these functions because we do not reuse them anywhere else

const myfum = function(){
    const myvar = "value";
    return myvar;
} // insted of writing this big line of code which assignes the same value to other variable and returns it we can write it in 
// single line using arrow function the above code is aslo writen using arrow function but the beloow one is bit simpler 

const myfun = ()=> "value";
console.log(myfun)
// we can use this for arry concatination 
const myarr = (arr1,arr2) => arr1.concat(arr2);
console.log(myarr([1,2,3],[4,5,6]));

// using default perameters for ur function 
const addeing = (number , value) => number+value;
console.log(addeing(6, )); // here the output is coming nan so we can declare a default perameter saying if i dont give any value use this and 
// execgute the code 
const addieeng = (number , value =1) => number +value;
console.log(addieeng(5, ));  // we can see here we are getting the output an dits using the default value 


//Modifying the function sum using the rest parameter in such a way that the 
// function sum is able to take any number of arguments and return their sum.
const sum = (...args) => {
    let total=0;
    for(let i=0; i<args.length; i++);{
    total += args[i];                      // neeeed to clarify this error 
    }
return total;
}
console.log(sum(1,2,3,4,5,6));




// spread operator es6 update came with an spread oeratoer which allowes arrays and other expansions in places where multiple perameters 
// or elements are expected 

// example progem shifting all the arr elements in arr1 to arr2.

const arr1 = [1,2,4,5,5,6];
let arr2;
console.log(arr2=[...arr1]);
console.log(arr1);              // as we can see here the spread operator is very helpfull 

// okay so to access elemennts the es6 has a thing called distructive assingment to access elements from objects 

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// usually we will be writting const today = HIGH_TEMPERATURES.today; const tomorrow = HIGH_TEMPERATURES.tomorrow;
// to get the data from left to right now using this we can directly send the data in objects 

const {today,tomorrow} = HIGH_TEMPERATURES ;
console.log(today,tomorrow);

