// Assignment # 1
ALERTS
alert("\nJAVASCRIPT ALERT \n\nError! Please Enter A Valid Password");
alert("\nJAVASCRIPT ALERT \n\nWelcome to JS Land...\nHappy Coding!");

var about = "JAVASCRIPT ALERT\n\nHello...I can run JS through my web browser console";
console.log(about)

//Assignment # 2
//VARIABLES FOR STRINGS
var myName = "Usaid Amin";
alert(myName);

var message = "Hello World";
alert(message);

var std_Name = "Usaid Amin";
alert(std_Name);

var std_Age = "I Am 21 Years Old";
alert(std_Age);

var std_Course = "Certified Mobile Application Development"
alert(std_Course);

var item = "PIZZA\nPIZZ\nPIZ\nPI\nP"
alert(item);

var email = "My email address is usaidamin21@gmail.com"
alert(email);

 var book = "I am trying to learn from the Book A smarter\nway to learn JavaScript";
 alert(book);

 var content = "Yah! I can write HTML content through JavaScript"
 console.log(content);

 var pic = "▬▬▬▬▬▬▬▬▬ஜ ۩۞۩ ஜ▬▬▬▬▬▬▬▬▬"
 alert(pic);

 //Assignment # 3
 //VARIABLES FOR NUMBERS

 var age = 21;
 alert(age);

 var visit = "You Have Visited This Site ____ Times"
 alert(visit);

 var birthYear = "My Birth Year is 2001\nData type of my declared variable is number";
 console.log(birthYear);

 var visitor_Name = "Usaid Amin";
 var product_Titel = "T-shirt(s)";
 var quantity = 5 ;
 console.log(visitor_Name + " " + quantity + product_Titel + "on XYZ Clothing Store");

//Assignment # 4
//VARIABLE NAMES

var variable1 = "Gain",variable2 = "Less", variable3 = "Donate";
console.log(variable1,variable2,variable3);

var illegal_variables = "Number or Capital Letters is not allowed in start of the Variable Name"
console.log(illegal_variables);

var legal_variables = "Variables names should always start with small letters, $ or _"
console.log(legal_variables);

//Assignment # 5
//MATH EXPRESSIONS

var a = 20;
var b = 10;
console.log(a + b);

var a = 20;
var b = 10;
console.log(a - b);

var a = 20;
var b = 10;
console.log(a * b);

var a = 20;
var b = 10;
console.log(a / b);

var a = 20;
var b = 10;
console.log(a % b);

var a = undefined ;
console.log("Value after variable declaration is" + " " + a);

var a = 5;
console.log("Initial Value:" + " " + a);
a++;
console.log("Value after increment is:" + " " + a);

var b = a + 7;
console.log("Value after addition is:" +  " " + b);
--b;
console.log("Value after decrement is:" + " " + b);

var c = b % 3;
console.log("The remainder is :" + " " + c);

// TICKETS
var total_tickets = 5;
var ticket_cost = 600;
var total_cost = ticket_cost * total_tickets;
console.log("Total cost to buy" + " " + total_tickets + " " + "tickets to a movie is" + " " + total_cost + "PKR");

// TEMPERATURE
var f = 70;
var c = (f - 32) * 5 / 9;
console.log(c);

var c = 25;
var f = (c * 9 / 5) + 32;
console.log(f);

// SHIPPING CART
var price1 = 650;
var quantity1 = 3;
var price2 = 100;
var quantity2 = 7;
var shipping_charges = 100;

var totalCost = price1 * quantity1 + price2 * quantity2 + shipping_charges;

console.log("Price of item 1 is" + " " + price1);
console.log("Quantity of item 1 is" + " " + quantity1);
console.log("Price of item 2 is" + " " + price2);
console.log("Quantity of item 2 is" + " " + quantity2);
console.log("Shipping Charges" + " " + shipping_charges);
console.log("Total cost of your order is" + " " + totalCost);

var totalMarks = 980;
var marks_obtained = 804;
var percent = marks_obtained * 100 / totalMarks;

console.log("Total Marks:" + " " + totalMarks);
console.log("Marks Obtained:" + " " + marks_obtained);
console.log("Percentage:" + " " + percent + "%");

// EXCHANGE RATES
var us_dollar = 10;
var exchange_rates_of_dollar = 104.80;
var saudi_riyal = 25;
var exchange_rates_of_saudi_riyal = 28;
var total_currency = us_dollar * exchange_rates_of_dollar + saudi_riyal * exchange_rates_of_saudi_riyal;

console.log("Total Currency in PKR:" + " " + total_currency);

var equation = 10 + 5 * 10 / 2;
console.log(equation);

// THE AGE CALCULATOR

var current_year = 2023;
var birth_year = 2001;
var current_age = current_year - birth_year;

console.log("Current Year:" + " " + current_year);
console.log("Birth Year:" + " " + birth_year);
console.log("Your Age is:" + " " + current_age);

// THE LIFETIME SUPPLY CALCULATOR

var favorite_snack = "Wavy";
var myAge = 22;
var maximumAge = 100;
var snacks_per_day = 3;
var need = (maximumAge - myAge) * snacks_per_day;

console.log("Favorite Snack:" + " " + favorite_snack);
console.log("Current Age:" + " " +myAge);
console.log("Estimated Maximum Age:" + " " + maximumAge);
console.log("Amount of snacks per day:" + " " + snacks_per_day);
console.log("You will need" + " " + need + " " + favorite_snack + " " + "to last you untill the ripe old age of" + " " + maximumAge);

//Assignment # 6-9
//MATH EXPRESSIONS

var a = 10;
var b = ++a;
console.log(b);
console.log(a);

var a = 11;
var b = a++;
console.log(b);
console.log(a);

var a = 12;
var b = --a;
console.log(b);
console.log(a);

var a = 11;
var b = a--;
console.log(b);
console.log(a);

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log(result);

var a = 10;
--a;
console.log(a);

var a = 10;
var b = 8;
var c = --a - --b;
console.log(c);

var a = 10;
var b = 8;
var c = --a - --b + ++b;
console.log(c);

var userName = prompt("Enter Your Name","Name");
console.log(userName);

var subject1 = prompt("Enter Subject"), subject1_num = +prompt("Enter Marks");
var subject2 = prompt("Enter Subject"), subject2_num = +prompt("Enter Marks");
var subject3 = prompt("Enter Subject"), subject3_num = +prompt("Enter Marks");
console.log(subject1 + " " + " " + " " + " " + subject1_num);
console.log(subject2 + " " + " " + " " + " " + subject2_num);
console.log(subject3 + " " + " " + " " + " " + subject3_num);

var obtained_marks = subject1_num + subject2_num + subject3_num;
console.log(obtained_marks);

var total_marks = 300;

var percentage = obtained_marks * 100 / total_marks;
console.log(percentage);

// Assignment # 9-11
// USER INPUT & CONDITIONAL STATEMENT

var city = prompt("Enter City Name");

if (city === "Karachi") {
    console.log("Welcome to city of lights")
}
else {
    console.log("Your City is not Correct")
}

var gender = prompt("Enter Gender");
if(gender === "male"){
    console.log("Gud Morning Sir")
}
else if (gender === "female") {
    console.log("Gud Morning Ma'am")
}

var color = prompt("Enter Color");
if(color === "Red"){
    console.log("Must Stop")
}
else if(color === "Yellow"){
    console.log("Ready to move ")
}
else if(color === "Green"){
    console.log("Move now")
}

var fuel = +prompt("Enter Remaining Fuel");
if(fuel <= 0.25) {
    console.log("Please refill the fuel in your car");
}
else{
    console.log("You don't need to refill the fuel");
}

var a = 4;
if (++a === 6){ 
    alert("Given condition for variable a is true"); 
}
else {
    alert("Given condition is not true");
}

var b = 82;
if (b++ === 83){ 
    alert("Given condition for variable b is true"); 
}
else{
    alert("Given condition is not true");
}

var c = 12;
if (c++ === 13){
    alert("Condition 1 is true");
}
if (c == 13){ 
    alert("Condition 2 is true");
}
if (++c < 14){ 
    alert("Condition 3 is true");
}
if(c === 14){
    alert("Condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalcost = materialCost + laborCost;
if(totalcost === laborCost + materialCost){
    console.log("The Cost Equals");
}
if(true){
    console.log("True");
}
if(false){
    console.log("False");
}

if("car" < "cat"){ 
    console.log("car is smaller than cat");
}
else{
    console.log("cat is smaller than car")
}

// MARKSHEET

var complete_marks = 300;
console.log("Total Marks :" + " " + complete_marks);
var name_of_subject1 = "English", marks_of_subject1 = 90;
var name_of_subject2 = "Urdu", marks_of_subject2 = 80;
var name_of_subject3 = "Science", marks_of_subject3 = 85;
var marks_achieve = marks_of_subject1 + marks_of_subject2 +marks_of_subject3;
console.log("Marks obtained :" + " " + marks_achieve);
var per = marks_achieve * 100 / complete_marks;
console.log("Percentage : " + " " + per +"%");
if(per >= 80){;
    console.log("Grade A+")
}
else if(per >= 70){
    console.log("Grade A");
}
else if(per >= 60){
    console.log("Grade B");
}
else if(per >= 50){
    console.log("Grade C");
}
else if(per >= 33){
    console.log("Grade D");
}
else {
    console.log("Sorry you are fail");
}
if(per >= 80){
    console.log("Remarks : You done a great work");
}
else if (per >= 70){
    console.log("Remarks : You done fine");
}
else if(per >= 60){
    console.log("You need to improve");
}
else if(per >= 50){
    console.log("Need more hardwork");
}
else if(per >= 33){
    console.log("Do study 5 hours in a day");
}
else {
    console.log("Better luck next time");
}

var random = Math.floor(Math.random() * 10) + 1;

var number = +prompt("Guess a number from 1 to 10: ");

if(number == random) {
    console.log("Bingo! Correct Answer");
}
else{
    console.log("Close enough to the correct answer");
}

var num = 24;
if(num % 3 == 0){
    console.log("This Number is divisible by 3");
}
else{
    console.log("This Number is not divisible by 3");
}

var number = prompt("Enter a number: ");

if(number % 2 == 0) {
    console.log("The number is Even.");
}
else {
    console.log("The number is Odd.");
}

// TEMPERATURE

var temp = +prompt("Enter Temperature");
if(temp > 40){
    console.log("It is too hot outside");
}
else if(temp > 30){
    console.log("The Weather today is Normal");
}
else if(temp > 20){
    console.log("Today's Weather is cool");
}
else if(temp > 10){
    console.log("OMG! Today weather is so cool");
}

// CALCULATOR

var number1 = prompt('Enter first number: ');
var operator = prompt('Enter operator ( either +, -, * or / ): ');
var number2 = prompt('Enter second number: ');


var result;

if (operator == '+') {
   console.log(result = number1 + number2);
}
else if (operator == '-') {
    console.log(result = number1 - number2);
}
else if (operator == '*') {
    console.log(result = number1 * number2);
}
else if (operator == '/') {
    console.log(result = number1 / number2);
}
else{
   console.log("Operator is not correct");
}

// Assignment # 12-13
// IF...ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONSITIONS

var letter = 'A';

if (letter.toUpperCase() === letter) {
  console.log("letter is uppercase");
} else {
  console.log("letter is lowercase");
}

var letter2 = 'b';

if (letter2.toLowerCase() === letter2) {
  console.log("The letter is lowercase");
} else {
  console.log("The letter is uppercase");
}

var a = +prompt("Enter Number 1");
var b = +prompt("Enter Number 2");

if (a > b && a > 0 && b > 0) {
    console.log("The larger number is a");
  }
else if (a < b && a > 0 && b > 0) {
    console.log("The larger number is b");
  }
else if (a === b && a > 0 && b > 0) {
    console.log("Both numbers are equal!")
  }
else {
      console.log("Please add an integer!");

  }

var integer = prompt("Enter a number: ");
if (integer > 0) {
    console.log("The Number is Positive");
}
else if (integer == 0) {
  console.log("The Number is Zero");
}
else {
     console.log("The Number is Negative");
}

var x = prompt("Enter character");
if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
    console.log("Vowel");
}
else{
    console.log("Consonant");
}

var password1 = prompt("Enter Password");
var password2 = prompt("Confirm Password");

if (password1 == '')
    console.log ("Please enter Password");
else if (password2 == '')
    console.log ("Please enter confirm password");
else if (password1 != password2) {
    console.log ("\nPassword did not match: Please try again...");
}
else{
    console.log("Password Match: Welcome to GeeksforGeeks!")
}

var greeting;
var hour = 13;
if(hour < 11){
    console.log(greeting = "Good Day");
}
else{
    console.log(greeting = "Good Evening")
}