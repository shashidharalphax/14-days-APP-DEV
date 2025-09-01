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

  // Only change code below this line
  let lookup={
    "alpha" : "Adams",
    "bravo" : "Boston",
    "charlie" : "Chicago",
    "delta" : "Denver",
    "echo" : "Easy",
    "foxtrot" : "Frank"
  }
  result = lookup[val]; // i did not add thsi line before i needed to add it dont make this mistake again 
  // Only change code above this line
  return result;
}

console.log(phoneticLookup("charlie"));
// for .hasOwnProperty 

function checkObj(obj, checkProp) { //we need to add values to obj,checkProp to run this code we need to define them 
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  }else{
    return "Not Found"
  }
  
  // Only change code above this line
}


