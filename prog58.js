//w.a.p to print the numbers from the given array whose sum is 6

const arr=[2,3,4,5]
 low=0
 up=arr.length-1
 pairsum=7
ispresent=false
count=0

while (low<up) {
    count+=1
    cursum=arr[low]+arr[up]
    if(cursum==pairsum){
        ispresent=true
        console.log(`(${arr[low]},${arr[up]})`);
        low++
        up--
    }
    else if(cursum>pairsum){
       up--
    }
    else{
        low++
    }
}
!ispresent && console.log('no such pair');
console.log(count);