//Welcome to Empwage JS

 //UC1 Checking employee attendance 
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

 //UC2 Checking employee dailywage
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