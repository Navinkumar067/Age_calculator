function calculateAge(){

    const today = new Date();
    const birthdateInput = document.getElementById("birthdate").value;
    const birthdateparts = birthdateInput.split("-");
    const birthDay = birthdateparts[0];
    const birthMonth = birthdateparts[1]-1;
    const birthYear = birthdateparts[2];
    const birthDate = new Date(birthYear,birthMonth,birthDay)


    console.log(birthdateInput);
    console.log(birthdateparts);
    console.log(birthDay);
    console.log(birthMonth);
    console.log(birthYear);

    const isValidDate = (date) =>{
        return(
            Object.prototype.toString.call(date) == "[object Date]" && !isNaN(date)
    );
    };

    if(!isValidDate(birthDate)){
        alert("Invalid Date Format: Please Enter a valid date in DD-MM-YY format.");
        return;
    }

    const ageInMilliseconds = today - birthDate;
    const ageInseconds = Math.floor(ageInMilliseconds/1000);
    const ageInMinutes = Math.floor(ageInseconds/60);
    const ageInHours = Math.floor(ageInMinutes/60);
    const ageInDays = Math.floor(ageInHours/24);
    const ageInWeeks = Math.floor(ageInDays/7);
    const ageInMonths = Math.floor(ageInDays/30.436875);
    const ageInYears = Math.floor(ageInMonths/365.25);

    const resultContainer = document.getElementById("resultContainer");
    const result = document.getElementById("result");

    result.innerHTML = `
        <div class="result-item">
            <h3>Age:</h3>
            <p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
        </div>
        <div class="result-item">
        <h3>Months Passed:</h3>
        <p>${ageInMonths} </p>
        </div>
        <div class="result-item">
        <h3>Weeks Passed:</h3>
        <p>${ageInWeeks} </p>
        </div>
        <div class="result-item">
        <h3>Days Passed:</h3>
        <p>${ageInDays} </p>
        </div>
        <div class="result-item">
        <h3>Hours Passed:</h3>
        <p>${ageInHours} </p>
        </div>
        <div class="result-item">
        <h3>Minutes Passed:</h3>
        <p>${ageInMinutes} </p>
        </div>
        <div class="result-item">
        <h3>seconds Passed:</h3>
        <p>${ageInseconds} </p>
        </div>
        <div class="result-item">
        <h3>Milliseconds Passed:</h3>
        <p>${ageInMilliseconds} </p>
        </div>
    `;

    resultContainer.style.display = "block";


}

const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    calculateAge();
});