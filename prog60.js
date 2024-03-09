const arr = [[2,49,[2,9,[5,7]]],[34,24],[3,5],[67,15]]

/*
for(num of arr){
    for(n of num){
        if(n>25){
            console.log(n);
        }
    }
} */


console.log(arr);

a=arr.flat(3)
console.log(a);
for(n of a){
    if(n>25){
        console.log(n);
    }
}