//Welcome to Empwage JS

//UC1 checking employee attendance 
const IS_ABSENT=0;

//Using random 
let empCheck=Math.floor(Math.random()*10)%2;

if(empCheck==IS_ABSENT)
{
  console.log("Employee is absent");
}
else
{
   console.log("Employee is present");
}

//UC2 Checking employee dailyWage
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;

let empHrs=0;
let empCheck1=Math.floor(Math.random()*10)%3;
switch(empCheck1)
{
case IS_PART_TIME:
    empHrs=PART_TIME_HRS;
    console.log("UC2-->Part time employee "+empHrs);
    break;
case IS_FULL_TIME:
    empHrs=FULL_TIME_HRS;
    console.log("UC2--->Full time employee "+empHrs);
    break;
default:
    empHrs=0;
    console.log("UC2--->Employee is absent "+empHrs);
}
let empWage=empHrs*WAGE_PER_HR;
console.log("Daily Wage : "+empWage);

//UC3 to use function in the employee wage to get emphours 
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;
let empHrs=0;

function getWorkinghours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            console.log("Part_Time Employee")
            return PART_TIME_HRS;
        case IS_FULL_TIME:
            console.log("Full_Time Employee")
            return FULL_TIME_HRS;
        default:
            console.log("Employee is absent")
            return 0;
    }
}

let empCheck=Math.floor(Math.random()*10)%3;
empHrs=getWorkinghours(empCheck);
let empWage=empHrs * WAGE_PER_HR;
console.log("Employee Wage: "+ empWage);

//Declaring constants, variables
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HRS=4;
const FULL_TIME_HRS=8;
const WAGE_PER_HR=20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH=160;
let empHrs=0;

function getWorkinghours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HRS;
        case IS_FULL_TIME:
            return FULL_TIME_HRS;
        default:
            return 0;
    }
}

//UC4 to calculate wage for a month by ,for loop statement
for(let day = 0;day<NUM_OF_WORKING_DAYS;day++)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs+=getWorkinghours(empCheck);
}
let empWage=empHrs*WAGE_PER_HR;
console.log("Uc4-Total Employee working Hours :"+empHrs+" Total Employee wage Wage : "+empWage);


//UC5 calculate wage using while loop
let totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays<NUM_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    empCheck=Math.floor(Math.random()*10)%3;
    totalEmpHrs+=getWorkinghours(empCheck);
}
let empWage3=totalEmpHrs*WAGE_PER_HR;
console.log("UC5-Total number of days : "+ totalWorkingDays + " Total Hours : "+totalEmpHrs + " Total Employee Wage : "+empWage3);


//UC6 Store dailywage along with total wage
function calculateDailyWage(empHrs) 
{
  return empHrs * WAGE_PER_HR;
}

let empDailyWageArray = new Array();
let empDailyWageMap=new Map();
let empDailyHours=new Map();
let empDailyWageAndHr=new Array();
let totalEmpHrs1=0;
let totalWorkingDays1=0;
while (totalEmpHrs1 <= MAX_HRS_IN_MONTH && totalWorkingDays1 < NUM_OF_WORKING_DAYS)
{
  totalWorkingDays1++;
  let empCheck1 = Math.floor(Math.random() * 10) % 3;
  let empHrs1=getWorkinghours(empCheck1);
  empDailyHours.set(totalWorkingDays1,empHrs1); //Uc 9
  let empwage1=calculateDailyWage(empHrs1);
  totalEmpHrs1 += empHrs1;
  empDailyWageArray.push(empwage1);
}
let empWage4 = calculateDailyWage(totalEmpHrs);
console.log("Uc6-Total Days : " +totalWorkingDays1 +" Total Hours : " +totalEmpHrs +" Emp Wage : " +empWage3);
