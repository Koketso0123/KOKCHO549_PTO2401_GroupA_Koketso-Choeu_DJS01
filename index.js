/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)


const d2 = d + (vel*time); //calcultes new distance
const rf = fbr*time; //calculates remaining fuel

const checkIfNum = (vel,acc,time) => {
  
   if (typeof vel !== 'number' || vel < 0) {
     
        throw new Error("Invalid velocity: must be a positive number (km/h).");
    
   }
  
  if(typeof acc !== 'number'){
    
    throw new Error("Invalid accelaration: accelaration must be a number");
  
  } 
  
  if(typeof time !== 'number'|| time < 0){
  
    throw new Error("Invalid time: time must be a positive number");
  
  }
  
}

// Pick up an error with how the function below is called and make it robust to such errors
const calcNewVel = (vel, acc, time) => {
   
  checkIfNum(vel,acc,time);
  
  if(time !== 0 && acc !== 0){
    const timeConvToSec = time*3600; //time from hours to seconds ;
    const convAcc = acc / 3600; //converts accelaration to m/s^2
    
    //finds new velocity if neccesary
    return vel + (timeConvToSec * convAcc);
    
  }
  return vel + (acc*time);
  
}

const vel2 = calcNewVel(acc, vel, time); //calculates new velocity based on acceleration

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






