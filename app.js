// Chapter # 38-42 Question # 1
// function cal(base, power) {
//     if (power < 0) return 1 / cal(base, -power);
//     var b = base, result = 1;
//     while (power > 0) {
//         if ((power & 1) != 0) {
//             result *= b;
//         }
//         power >>= 1;
//         b *= b;
//     }
//     return result;
// }
// document.write(cal(4, 4));

// ========OR========

// function power(base, exponent){
//     var result=1;
//     if(exponent == undefined)
//         exponent = 2;
//     for(var i=1; i<=exponent; i++){
//         result = result*base;
//     }
//     return result;
// }
// document.write(power(3, 4));



// Chapter # 38-42 Question # 2
// var year = parseInt(prompt("Enter a year to see if it's LEAP year or Not"));
// function leapyear(year) {
//     if( (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0)){
//         document.write(`"Yes, ${year} is a Leap year"`)
//     }
//     else{
//         document.write(`"No, ${year} is not a Leap year"`)
//     }
//   return;
// }

// leapyear(year);



// Chapter # 38-42 Question # 3                                                                 // not done   
// var a = parseInt(prompt("Enter A side value of a triangle"));
// var b = parseInt(prompt("Enter B side value of a triangle"));
// var c = parseInt(prompt("Enter C side value of a triangle"));

// var s = (a + b + c)/2;
// var area = s(s-a)(s-b)(s-c); 
// console.log(area);
// document.write(`The area of a triangle is ${area}`);


// Chapter # 38-42 Question # 4
// var english = parseInt(prompt("Enter your English marks")) ;
// var maths = parseInt(prompt("Enter your Maths marks"));
// var science = parseInt(prompt("Enter your Science marks"));

// function add(){
//     result = english+maths+science;
//     return result;
// }

// function average(){
//     return (add()/3);    
// }

// function percentage(){
//     return (add()/300)*100;
// }

// function main(){
//     document.write(`Marks of English, Maths are Science are ${english}, ${maths}, ${science} respectively<br>`)
//     document.write(`Total Obtained Marks are ${add()} out of 300`);
//     document.write("<br>");
//     document.write(`The Average Marks are ${average()}`);
//     document.write("<br>");
//     document.write(`The Percentage is ${percentage()}`);
// }

// main();



// Chapter # 38-42 Question # 5
// var listArray = ["a", "b", "c", "d", "e", "f", "g", "h"];
// var str = prompt("Enter a character to find in array")
// function indexOff(str) {
//     for(var i = 0; i < listArray.length; i++) {
//         if(listArray[i] == str) {
//             return i;
//         }
//     }
// }
// document.write(`<h1> The character '${str}' is at index ${indexOff(str)} </h1>`);


// Chapter # 38-42 Question # 6
// var strings = prompt("Enter a string to remove the occurrence of vowels");
// if(strings.length <= 25){
//     document.write(`The String is: <b>${strings}</b> <br>`)
//     function vowelCut(){
//         strings = strings.split('');                     
//         string = strings.map(x=>x.replace( /[aeiou]/g, '' )); 
//         string = string.join('');
//         return string;
//         }

//     } else{
//     alert("The length of the string is greater than 25.");
//     }
             
// document.write(`After vowels removed in a String: <b>${vowelCut(strings)}</b>`);
// console.log(strings); 
    



// Chapter # 38-42 Question # 7                                                             // half done ... 
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (const letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count;
//   }

//  document.write(findOccurrences());



// Chapter # 38-42 Question # 8
// var km = parseInt(prompt("Enter the distance in kilometer."));
// var meters = km*1000; 
// var feet = km*3280.84;
// var inches = km*39370.1;
// var centimeter = km*100000;
// document.write(`Distance in Kilometer: ${km} <br>`);
// document.write(`Distance in meters: ${meters} <br>`);
// document.write(`Distance in feet: ${feet} <br>`);
// document.write(`Distance in inches: ${inches} <br>`);
// document.write(`Distance in centimeters: ${centimeter} <br>`);



// Chapter # 38-42 Question # 9
// var totalhours = parseInt(prompt("Enter your total hours of work"));
// if(totalhours < 40){
//     document.write("You won't get overtime amount because your total hours are less than 40.")
// }
// else if(totalhours > 40 ){
//     var i = totalhours - 40;
//     var result = i * 12;
//     document.write(`Your over time hours are ${i} and the amount for over time is ${result}.`);
// }


// Chapter # 38-42 Question # 10                                                            // not done
// var amount = parseInt(prompt("Enter an amount"));    
// function countCurrencyNotes(amount){
//     notes =  [5000, 1000, 500, 100, 50, 20, 10];
//     noteCounter = [7];

//     for(var i = 0; i < 7; i++ ){
//         if(amount >= notes[i]){
//             noteCounter[i] = amount / notes[i];
//             amount = amount - noteCounter[i]*notes[i];
//         }
//     }

//     document.write(`Currency Count => `);
//     for (var i = 0; i < 7; i++) { 
//         if (noteCounter[i] != 0) { 
//             document.write(notes[i] + " : "
//                 + noteCounter[i] + "<br> "); 
//         } 
//     } 
// }
// countCurrencyNotes(amount);

// OR

// var amount = parseInt(prompt("Enter an amount"));
// function countCurrencyNotes(){
//     var notes = [ 500, 100, 50, 20, 10];
//     var temp, i;

//     temp = amount;
//     for( var i=0; i<5; i++){
//         document.write(`${notes[i]} notes is: ${temp/notes[i]} <br>`);
//         temp = temp % notes[i];
//     }

// }

// countCurrencyNotes(amount);



// Chapter # 43-48 Question # 1
// function alertFunction(){
//     return alert("It's an alert");
// }



// Chapter # 43-48 Question # 2
// function alertFunction(){
//     alert("Thank you for shopping! :-)");
// }



// Chapter # 43-48 Question # 3
// function deleteRow(r){
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("myTable").deleteRow(i);
// }



// Chapter # 43-48 Question # 4
// function out(){
//     document.getElementById("img").src = "images/image2.jpg" 
// }

// function over(){
//     document.getElementById("img").src = "images/image1.jpg" 
// }



// Chapter # 43-48 Question # 5
// var count = 0;
// function increase(){
//     count++;
//     document.getElementById("num").innerHTML = count;
// }
// function decrease(){
//     count--;
//     document.getElementById("num").innerHTML = count;
// }



// Chapter # 49-52 Question # 1
// function myFunction(){
//     var firstname = document.getElementById("fname").value;
//     var lastname = document.getElementById("lname").value;
//     var emailaddress = document.getElementById("email").value;
//     var cellno = document.getElementById("cell").value;

//     document.getElementById("firstname").innerHTML = firstname;
//     document.getElementById("lastname").innerHTML = lastname;
//     document.getElementById("emailaddress").innerHTML = emailaddress;
//     document.getElementById("cellno").innerHTML = cellno;
// }



// Chapter # 49-52 Question # 2
// function myFunction() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more"; 
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less"; 
//       moreText.style.display = "inline";
//     }
//   }



// Chapter # 49-52 Question # 3
// function edit_row(no)
// {
//     
//     document.getElementById("edit_button"+no).style.display="none";
//     document.getElementById("save_button"+no).style.display="block";
        
//     var name=document.getElementById("name_row"+no);
//     var country=document.getElementById("country_row"+no);
//     var age=document.getElementById("age_row"+no);
        
//     var name_data=name.innerHTML;
//     var country_data=country.innerHTML;
//     var age_data=age.innerHTML;
        
//     name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//     country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
//     age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
// }

// function save_row(no)
// {
//     var name_val=document.getElementById("name_text"+no).value;
//     var country_val=document.getElementById("country_text"+no).value;
//     var age_val=document.getElementById("age_text"+no).value;

//     document.getElementById("name_row"+no).innerHTML=name_val;
//     document.getElementById("country_row"+no).innerHTML=country_val;
//     document.getElementById("age_row"+no).innerHTML=age_val;

//     document.getElementById("edit_button"+no).style.display="block";
//     document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no)
// {
//     document.getElementById("row"+no+"").outerHTML="";
// }

// function add_row()
// {
//     var new_name=document.getElementById("new_name").value;
//     var new_country=document.getElementById("new_country").value;
//     var new_age=document.getElementById("new_age").value;
        
//     var table=document.getElementById("data_table");
//     var table_len=(table.rows.length)-1;
//     var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//     document.getElementById("new_name").value="";
//     document.getElementById("new_country").value="";
//     document.getElementById("new_age").value="";
// }



// Chapter # 58-67 Question # 1




// Chapter # 58-67 Question # 2


