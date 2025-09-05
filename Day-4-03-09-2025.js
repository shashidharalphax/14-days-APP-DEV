//Inbuild functions 

// globally used inbuild functions 

parseInt() //coverts a string to an integer 

let a="007.897";
console.log(parseInt(a));

parseFloat() //converts a string to a floating point number 

let A="0007.657";
console.log(parseFloat(A));

isNaN() // checks if the value is not a number 

let b="b"; // try executing the b with a number and it returns a boolen output 
console.log(isNaN(b)); // if the number is giiven inthe strings it will take it as a number not a string 


// string method Inbuilt functions 

lenght // returns the number of elements  

let B=[1,2,3,4,5,6, ];
console.log(B.length);  // have a basic dought will it count from 0s or from 1 

charAt()  // returns a specific characted in the string 
 
let ba="saishashidhar";
console.log(ba.charAt(5));

indexOf() // returns the index of first occerence of a substring 
lastIndexOf()  // returns the last occerence of a substring 


slice()
substring()      // these 3 are used to extract a portion of a string 
substr()          

toUpperCase(),toLowercase()  // are used to cover lower case to upper case vise versa 

trim() // removes white spaces from both the end of the string 

let aa=" sai ";
console.log(aa);
console.log(aa.trim());

split() // splict a string into a array of a substring 
let bb="saishas hidhar, saishashidhar";
console.log(bb);
console.log(bb.split(""));    

let text = "Sai Durga Meghana";
let words = text.split(" ");
console.log(words);

replace()// accurence of a specif value with a different value 
let aaa="saisss";
console.log(aaa.replace("s","a"));




// array methods inbuild functions 


push()  // performs push operations into a array or nested array 
Pop() // performs pop operations in an array where to remove an element we use this 
shift() // we use this to insert an element at the starting of the array 
// the push function sends the data at the end of the array but the shift sends it in the front thats the difference 
unshift() // as for push pop is present for shift unshift is present wehch helps remove elemets from front 

slice() // add or remove elements from an array at a specific index 

includes() // checks if an array includes a certain element or value in it

find() // returns the value of the first element that satisfies that satisfies the provides testing function 
// similarly we have findIndex which is used for Index insted of value 
findIndex()

reduce() // excgutes a reducer function on each element of an array resulting in a single output value 


// Math object functions 

Math.abs() // used to return the absolute value of the given number 


Math.ceil() // used for rounding a number up 
console.log(Math.ceil(10.189));

Math.floor() // used for rounding a number down 
console.log(Math.floor(4.7896));

Math.round() // rounds up to the nearest integer 
console.log(Math.round(5.198))

Math.random() // returns a random number between 0 and 1 alwasys a decimal number but never returns 1 or 0
console.log(Math.random());

Math.min()// used to get the minimum value of an array or list   // neeed to clarify this will list add or not 
Math.max() // used to get the maximum value of an array of list 

// date object methods

getTiem() // generated time
let todaytime = time();
console.log(todaytime.getTime());           




// intermediate algorithem scripting 

// addition of all numbers in the range 

function sumall(arr){
    let a=Math.max(arr[0],arr[1]);
    let b=Math.min(arr[0],arr[1]);
    let totalsum=0;
    for(let i=b; i<=a; i++){
        totalsum +=i;
    }
    return totalsum;
}
console.log(sumall([4,10]));



// this question is for Compare two arrays and return a new array 
// with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
  const newArr = [];
  for(let i=0;i<=arr1.length;i++){
    if(!arr2.includes(arr1[i])){
      newArr.push(arr1[i]);                                
    }
   }
  for(let j=0;j<=arr2.length;j++){
    if(!arr1.includes(arr2[j])){
      newArr.push(arr2[j])
    }
   } 
  return newArr;
}
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

//seek and distroy 
//You will be provided with an initial array as 
// the first argument to the destroyer function, followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.
//The function must accept an indeterminate number of arguments, also known as a variadic function. 
// You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.

function destroyer(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}



// pig latin english words 

function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
console.log(translatePigLatin("consonant"));

// es6 
// let const arrow functions , import export, definign components classes , promises and asyncronus weigts

function orderPizza() {
  return new Promise((resolve, reject) => {
    let pizzaReady = true;

    if (pizzaReady) {
      resolve("🍕 Pizza is ready!");
    } else {
      reject("😢 Sorry, no pizza today.");
    }
  });
}

orderPizza()
  .then(msg => console.log(msg))   // if resolve happens
  .catch(err => console.log(err)); // if reject happens