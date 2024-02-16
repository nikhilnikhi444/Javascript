num = 8

if(num%15==0){
    console.log('fizzbuzz');
}
else if(num%5==0){
    console.log('buz');
}
else if(num%3==0){
    console.log('fizz');
}
else{
    console.log('not divisible by any of these numbers');
}