//w.a.p to check whether a given number is prime or not
num=29
flag=0
isprime=true
for(i=2;i<num;i++){
    if(num%i==0){
      isprime=false
      break;
    }
}
console.log(isprime?'is prime number':'not a prime number');


