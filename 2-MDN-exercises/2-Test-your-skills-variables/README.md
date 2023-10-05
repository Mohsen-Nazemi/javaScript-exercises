# ex1: 
- [**exercise title**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_variables#variables_1)
        

- **solution** :

```js
// Add your code here
let myName;
myName = 'Mohsen';

let myAge = 26;

// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
para1.textContent = myName;
const para2 = document.createElement('p');
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);
    
```



# ex2: 
- [**exercise title**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_variables#variables_2)
  
- **solution** :
``` js

// Add your code here

let myName = 'Paul';
myName = 'Mohsen';
// Don't edit the code below here!

section.innerHTML = ' ';
const para = document.createElement('p');
para.textContent = myName;
section.appendChild(para);
    
```

# ex3: 
- [**exercise title**](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_variables#variables_3)
        
- **solution** :
``` js

// Add your code here

let myName = 'Default';
myName = 'Chris';

let myAge = '42';
myAge = Number(myAge)


// Don't edit the code below here!

section.innerHTML = ' ';
const para1 = document.createElement('p');
const para2 = document.createElement('p');
para1.textContent = myName;
para2.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para1);
section.appendChild(para2);
```