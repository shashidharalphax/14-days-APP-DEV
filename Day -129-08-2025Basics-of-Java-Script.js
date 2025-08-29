//so first thing today in java Script i will be learning how to write comments 

//to write single line coments we use // style coment 
//ex:-
// my name is saishashdhar r 

//to write a multy line coment we go with /* */ style coments 
//ex:-
/* hello ther 
i am starting to learn java script 
my name is sai shashidhar r */

/*there are 8 different data types 
undefined 
null 
string 
boolen 
symbol 
bigint 
number 
object 

any of this datatype can be stored in a variable so to tell the computer we are enterning a variable we tell it by 
putting "var" in front of it and it should end with a semicolon 
*/

// creating a var called my name 
var myName;
/* variable is created now i am just adding a string to it or i can add a value
 so when ever i use this variable the system thinks of it as the entered value */
myName = "sai";
/* so here sai is assigned to myName if i need to change it to different variable i need to diclare it
and myName will be assigned to it with = */
var myname; // now new varibale is created js is case sensitive myName =! myname 
myname = myName;

// we can directly initialize the value to the variable no nned to define it first and assigne the value to it 
var myName = "sai";
/* as var can be owerwritten by any mistake in the update of es6 there was an update to let 
so let can not be owerwritten it will give you an error*/
let myName ="sai";// for now we will not have any error 
let myname="sai";// but if we chane the n then we will have an error 
// usually developers use upper case for immutable and lovercase, camelcase for mutable values 
/*there is an other thing called const which has same power as let but here 
const is only used for constant variables which are immutable which are never changed */
const FCC = "saishashidhar";
let fact = "sai";
fact = "shashidhar";
console.log(FCC, fact);

// simple first program adding of 2 numbers 
const SUM = 10 + 10;
console.log(SUM);

// subraction 
const DIFFERENCE = 12 - 2;
console.log(DIFFERENCE);

// multipilcation
const PRODUCT = 2 * 100;
console.log(PRODUCT);

// quotient
const QUOTIENT = 10 / 5;
console.log(QUOTIENT)

// so now for increment we use '++' a++ == a=a+1
let myValue = 35;
myValue++; // same for dicrement but we will be using -- instead of ++ 
console.log(myValue); 

// we can store decimals in variables too 
let myVal = 7.2;
console.log(myVal);
// multiplication of decimal can be done 
let my_val = 2.0 * 2.5;
console.log(my_val);

/* there is remainder to % its not modules its remainder 
5%2= 1
5/2= 2 remainder 1
5*2= 10 */
// remember the most coman program finding the even and odd number it will be used mostely there 

// now for single increment we used '++' but if n vale is decide and it has to increase to certain value we use n+= or n-= for decreasing 
let n = 5;//n+=0 == n = n+0
n += 0;//change the 0 so u get the out put of 10, same goes for -ve aslo, same goes for *, same for / division aslo,
console.log(n);

// now to print a string inside a string 
const mystr = "i am sai shashidhar \"i graduvated resently\" in engniring \"my skill are \" python.";
console.log(mystr);

/*these are some of the codes and outputes 
\'	single quote
\"	double quote
\\	backslash
\n	newline
\t	tab
\r	carriage return
\b	backspace
\f	form feed 

print a sentence like this 
FirstName 
    \MiddelName
LastName 
*/
let str = "FirstName\n\t\\MiddleName\nLastName";
console.log(str);
//concatination of strings 
let stri = "my name is "+"SaiShashidhar R";//can use '' cotes aslo 
console.log(stri);

//finding the length of the string 
let names = "Saishashidhar R";
console.log(names.length);

// in java script the string values are imutable they can not be changed once created ex:-
let myobb = "bob";
myobb[2] = "a";
console.log(myobb);

// to find the characted in the string
const lastname= "syedzainuddin";
//const thleteroflastname =lastname[3]; // in other way we use const thleteroflastname = lastname[lastname.length -1];
console.log(thleteroflastname);


//array , nesting of an array , modifying of array, accesing and modifying multi dimentional array 
let aaa = ["sai", 3];
let bbb = [["sai"],[3,5]];
console.log(aaa, bbb);
aaa[1] = "6";
console.log(aaa);


let ccc=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[1,2,3],5,7],
];
let nestedarray = ccc[3];
let subarray = ccc[3][0];
let element = ccc[3][0][2]
let data = ccc[0];
console.log(data, nestedarray, subarray, element);

// to append data in the array we use push() method 
let aa = [["cat", 2],["dog",3]];
aa.push(["lion",7]);
console.log(aa);

// how using push() we can append values using pop we can remove values also 
let bb = [["cat", 2],["dog",3]];
const bpelm = bb.pop();
console.log(bb,bpelm);

// as pop removes the last element .shift() is used to remove the first eklement 
let cc = [["cat", 2],["dog",3]];
const cshelm = cc.shift();
cc.unshift(["lion",7]);// so as we can shift values we can unshit and add different elemnts into the array 
console.log(cc,cshelm);

//starting with fuctions 

function reusableFunctyion(){
    console.log("Hi World");
}
reusableFunctyion();// everytime i call this fuction the message inside it will be executed 

// now we will be using function for performing basic operations 
function adition(a,b){
    console.log(a+b);// we can use this for *,/,-,% etc 
}
adition(10,500);

// now returining the function
function timesFive(n){
  return n*5;
}                              // currently not working dont know the error will solve later //
timesFive(5);

// global vs local scope not understood later ask it 
// okay understood a littel bit 
// so when a initiallization is done inside a function its called local when it is done outside its global 
// if you use global scope and try to run the function it will not it will need its own local variable to run it ex:-
let outware = "T-shirt";

function outfit(){
    let inware = "sweater";         // currently not working dont know the error will solve later //
    return outware;
}
outfit();


// assingment with a return value 
let processer =0;
function processArg(num){
    return (num + 3)/5;
}

processer = processArg(7)
console.log(processer);


//writing a function which preforms push and shift operation at same time in a queue 
function nextinline(arr,item){
    arr.push();
    let removed = arr.shift();
    return removed;
}


