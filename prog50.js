let expense = [12000,23000,40000,34000,55000,22000,10000]
// find the lowest expense

lowest=expense[0]
for(let num of expense){
    if(num<=lowest){
        lowest=num
    }
}
console.log(lowest);

// find the highest expense

highest=expense[0]
for(let exp of expense){
    if(exp>=highest){
       highest=exp
    }
}
console.log(highest);

// find the total expense

sum=0
for(let num of expense){
    sum+=num
}
console.log(sum);