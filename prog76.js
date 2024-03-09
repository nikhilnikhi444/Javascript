//  [1000,'Neel','developer','kochi',25000,3],
p= [1000,'Neel','developer','kochi',25000,3]

console.log(typeof(p));


console.log(p[2]);
console.log('-----------------------------------');
//  [1000,'Neel','developer','kochi',25000,3],
employee={
    id:1000,
    Name:'Neel',
    empdes:'developer',
    location:'kochi',
}

console.log(typeof(employee));
console.log(employee["empdes"]);
console.log(employee.empdes);
console.log('-----------------------------------');

// to add an item to the object
employee["salary"]=25000
console.log(employee);
console.log('-----------------------------------');

//object assign way
Object.assign(employee,{'experience':3})
console.log(employee);
console.log('-----------------------------------');

// adding to delete
Object.assign(employee,{isVaccinated:true})
console.log(employee);
console.log('-----------------------------------');

// delete
delete employee.isVaccinated
console.log(employee);
console.log('-----------------------------------');

// update
employee["Name"]='Neel John'
console.log(employee);
console.log('-----------------------------------');


employee["experience"]+=3
console.log(employee);
console.log('-----------------------------------');

// to access key using in
for(let x in employee){
    console.log(x);
}
console.log('-----------------------------------');


// w.a.p to check whether location key is present or not

console.log('location' in employee?'present':'not present');
console.log('-----------------------------------');

// w.a.p to check gender is present in the object employee .if presnet print else add new key as gender with value male

if('gender' in employee){
    console.log('present');
}
else{
    employee["gender"]='male'
    console.log(employee);
}
// or
'gender' in employee?console.log('present'):(employee['gender']='male',console.log(employee))