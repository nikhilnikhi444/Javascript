//w.a.p to print the numbers from the given array whose sum is 6

const arr=[2,3,4,5]
sum=6
ispresent=false
count=0
for(i=0;i<=arr.length-1;i++){
  count+=1
      for(j=i+1;j<=arr.length-1;j++){
        if(arr[i]+arr[j]==sum){
            ispresent=true
            console.log(`(${arr[i]},${arr[j]})`);
        }
      }
}
!ispresent && console.log('no such a pair');
console.log(count);