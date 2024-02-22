let arr = [10,23,11,2,5,3]

// w.a.p to check wether is present in the array
searchItem = 2
ispresent = false 
for(let num of arr){
    if(searchItem==num){
       ispresent=true
    }
}
console.log(ispresent?'present':'not present');


//i/p = [4,5,6]
//o/p = [11,10,9]