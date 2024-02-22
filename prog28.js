//w.a.p to find the gcd/hcf of given two numbers

num1=12
num2=28
gcd=0
for(i=1;i<=num1 && i<=num2;i++){
   if(num1%i==0 && num2%i==0){
     gcd=i
   }
}
console.log(gcd);