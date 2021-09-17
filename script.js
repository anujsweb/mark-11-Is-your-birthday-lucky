const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");

const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber){
    if(sum%luckyNumber === 0){
        outputBox.innerText = "Your birthday is lucky";
        console.log("Your birthday is lucky");
    }
    else{
        outputBox.innerText = "Your birthday is not lucky";
        console.log("Your birthday is not lucky");
    }
}

function checkBirthdayIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&luckyNumber.value)
    compareValues(sum, luckyNumber.value);
    else
    outputBox.innerText = "Please enter both the values.";
}

function calculateSum(dob){
   dob = dob.replaceAll("-","");
   let sum = 0;
   for(let index = 0; index < dob.length; index++){
       sum += Number(dob.charAt(index));
   }
   return sum;
}

checkNumberButton.addEventListener("click",checkBirthdayIsLucky);
