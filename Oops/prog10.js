console.log('calculation');
exp='*10/2*5'

try{
    
result=eval(exp)
console.log(`result is ${result}`);
}
catch{
    console.log('expression have some errors');
}
finally{
    console.log('task ended');
}
