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


//Uc7 Use Array helper function
//Uc-7a>>reduce and foreach()
let totEmpWage = 0;
function sum(dailyWage) 
{
  totEmpWage += dailyWage;
}
//foreach to traverse the array and print total wage
empDailyWageArray.forEach(sum);
console.log("Uc 7A-Total Days : " +totalWorkingDays +" Total Hours : " +totalEmpHrs +" Emp Wage : " +totEmpWage);

function totalWages(totWage,dailyWage)
{
    return totWage+dailyWage;
}
//using reduce to traverse the array,
console.log("Uc 7A-Total Wage using Reduce method "+empDailyWageArray.reduce(totalWages,0));

//UC 7b-Show the day along with dailywage using Array map helper function

let dailyCounter = 0;
//functions to day with wage
function mapDayWithWage(dailywage)
{
    dailyCounter++;
    return dailyCounter+" = "+dailywage;
}
let mapDayWithWageArr = empDailyWageArray.map(mapDayWithWage);
console.log("Uc 7B-Day With Daily Wage");
console.log(mapDayWithWageArr);

//UC 7C-Show days only when Fulltime wage of 160 earned(By using filter())
function fullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullTime = mapDayWithWageArr.filter(fullTimeWage);
console.log("Uc 7C-Full time along with day")
console.log(fullTime);

//Uc 7d-find the first occurence when fulltime  wage earned using find()
function findFullTimeFirstOccurence(dailyWage)
{
    return dailyWage.includes("160"); //includes() is work only for array
}
console.log("Uc 7D-Find 1st occurences with full day salary: "+mapDayWithWageArr.find(findFullTimeFirstOccurence));

//Uc 7E- check if every element of full time employee has full time wage using every(){if at any, the condition fails it gives false and doesnt check for remaining}
function isAllFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("Uc 7E-Check all elements with full time salary: "+fullTime.every(isAllFullTimeWage));

//Uc 7F- check if there is any part time wage using some(), if there is any part time it returns true and dont check for remaining
function isAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
} 
console.log("UC 7F-Check if any part time wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC 7G- Find the number of days the employee worked
function totalDaysWorked(numofDays,dailyWage)
{
    if(dailyWage>0)
    numofDays++;
    return numofDays;
}
console.log("UC 7G- Number of days employee worked : "+empDailyWageArray.reduce(totalDaysWorked,0));
