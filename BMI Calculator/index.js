/* The Algorithm (Functional Logic) 

Input: The function receives weight, height, and age as parameters.
Calculate: Solve for BMI: $BMI = \frac{weight}{height^{2}}$.
Categorize: Use an if/else if/else chain to check the BMI value.
Return: Send back a final string containing the age, the BMI, and the category. */

/* 

Pseudocode:

FUNCTION calculateBMI(weight, height, age):
    bmi = weight / (height * height)
    
    IF bmi < 18.5 THEN status = "Underweight"
    ELSE IF bmi < 25 THEN status = "Healthy"
    ELSE IF bmi < 30 THEN status = "Overweight"
    ELSE status = "Obese"
    
    RETURN "At age " + age + ", BMI is " + bmi + " (Status: " + status + ")" 
*/

const weight = Number(prompt("Weight(kg): "));
const height = Number(prompt("Height(m): "));
const age = Number(prompt("Age: "));

// define the BMI calculator function
function getBMIreport(weight, height, age) {
  // calculate the BMI value
  const bmi = weight / height ** 2;

  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi < 25) {
    category = "Healthy weight";
  } else if (bmi < 30) {
    category = "Overweight";
  } else {
    category = "Obese, please watch your weight!";
  }

  return `At Age ${age}, your BMI is ${bmi.toFixed(1)} and your weight category is: ${category}`;
}

const finalReport = getBMIreport(weight, height, age);

console.log(finalReport);
