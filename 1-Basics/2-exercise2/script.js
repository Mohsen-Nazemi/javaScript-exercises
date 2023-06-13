/* ## 2-exercise2
Write a JavaScript program to display the current day and time in the following format.  

Sample Output : Today is : Tuesday.

Current time is : 10 PM : 30 : 38
 */

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednday', 'Thursday', 'Friday', 'Saturday'];

const date = new Date();

const todayNumber = date.getDay();

console.log(`Today is : ${days[todayNumber]}.`)


// ----
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

const postfix = (hour >= 12) ? 'PM' : 'AM';

console.log(`Current time is: ${hour} ${postfix} : ${minute} : ${second}`);



