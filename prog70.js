//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
highpost=covid_data.reduce((data1,data2)=>data1[2]>data2[2]?data1:data2)
console.log(highpost[1]);
console.log('------------------------------');
//2. district having Highest 1st dose vaccine
highdose=covid_data.reduce((data1,data2)=>data1[5]>data2[5]?data1:data2)
console.log(highdose[1]);
console.log('------------------------------');
//3. district having lowest death rate
lowdeath = covid_data.reduce((data1,data2)=>data1[3]<data2[3]?data1:data2)
console.log(lowdeath[1]);
console.log('------------------------------');
//4. sort data with +ve case in descending order
covid_data.sort((data1,data2)=>data2[2]-data1[2]).forEach(element=>{console.log(element);})
console.log('------------------------------');
//5. is district with +ve cases > 15000
dwpc=covid_data.some(data=>data[2]>15000)
console.log(dwpc?'yes':'no');
console.log('------------------------------');
//6. sort data with 1st dose vaccine ascending order
covid_data.sort((data1,data2)=>data1[5]-data2[5]).forEach(element=>{console.log(element);})
console.log('------------------------------');
//7. Print Thrissur details
thrissur=covid_data.find(data=>data[1]=='Thrissur')
console.log(thrissur);
console.log('------------------------------');
//8. Print total number of positive cases
totalposcase=covid_data.map(data=>data[2]).reduce((data1,data2)=>data1+data2)
console.log(totalposcase);
console.log('------------------------------');
//9. Print total number of curred cases
curedcase=covid_data.map(data=>data[4]).reduce((data1,data2)=>data1+data2)
console.log(curedcase);
console.log('------------------------------');
//10. Print curred cases in Idukki
covid_data.filter(data=>data[1]=='Idukki').forEach(item => console.log(item[4])
    
);
