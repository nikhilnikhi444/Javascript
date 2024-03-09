
//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
employee.map((emp)=>emp[1]).forEach(element => {console.log(element);
    
});
console.log('-------------------------------------');
//print total numbers of employee
console.log(`total number of employee is : ${employee.length}`);
console.log('-------------------------------------');
//print developer employee details

employee.filter(item=>item[2]=='developer').forEach(x=>console.log(x))
console.log('-------------------------------------');
//print employee whose salary > 30000

employee.filter(emp=>emp[4]>30000).forEach(y=>console.log(y))
console.log('-------------------------------------');
// print details of employee Laisha
laisha=employee.find(emp=>emp[1]=='Laisha')
console.log(laisha);
console.log('-------------------------------------');

//sort employee based on their salary in descending order
console.log(employee.sort((emp1,emp2)=>emp2[4]-emp1[4]))
console.log('-------------------------------------');
//sort employee based on their experience in ascending order
console.log(employee.sort((emp1,emp2)=>emp1[5]-emp2[5]))
console.log('-------------------------------------');
//print the employ name whose have the higest salary
highestsalary=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(highestsalary[1]);
console.log('-------------------------------------');
//print the employ name whose have the higest salary
lowestsalary=employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(lowestsalary[1]);
console.log('-------------------------------------');
// print the total salary expense of the company
salaryExpense=employee.map(item=>item[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(salaryExpense);