const name = prompt("Hello, Please Enter username:");
console.log(`Welcome ${name}`);

let point = 1;
let levels = 1;
let newLevel = 1;
let trials = 1;
let maxTrials = 3;

for( let i = 2; i < 10; i++) {
  let randomGuess = Math.floor((Math.random() * i) + 1);
  console.log(`level ${newLevel}`);
  const userGuess = parseInt(prompt(`Enter a number between 1 and ${i}`));
  newLevel++;
console.log(userGuess);
  
  
   
if(randomGuess == userGuess){console.log(`you win ${point} point`);      point++;
  
  
       }

 
if(randomGuess != userGuess){
console.log(`Fail`);
console.log(`Game over`);
  break;
}
   
  }
  
console.log(`program complete`);