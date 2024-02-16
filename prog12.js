num1=6
num2=8
num3=10
if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log(`second largest number is ${num2} `);
        console.log(`decenting order is ${num2},${num2},${num3}`);
    }else{
        console.log(`second largest number is ${num3} `);
        console.log(`decenting order is ${num1},${num3},${num2}`);
    }
}
else if(num2>num1 && num2>num3){
   if(num1>num3){
    console.log(`second largest number is ${num1} `);
    console.log(`decenting order is ${num2},${num1},${num3}`);
   }
   else{
    console.log(`second largest number is ${num3} `);
    console.log(`decenting order is ${num2},${num3},${num1}`);
   }
}
else if(num3>num1 && num3>num2){
   if(num1>num2){
    console.log(`second largest number is ${num1} `);
    console.log(`decenting order is ${num3},${num1},${num2}`);
   }
   else{
    console.log(`second largest number is ${num2} `);
    console.log(`decenting order is ${num3},${num2},${num1}`)
   }
}
else{
    console.log(`all numbers are equal`);
}