// w.a.p to check whether the given three digit number is armstrong or not
//153=1**3 + 5**3 + 3**3 = 1+125+27=153

num=153
temp=num
sum=0
while (num>0) {//153>0?/
    ld=num%10//153%10=3
    sum=sum+(ld**3)//0+27=27
    num=Math.floor(num/10)//153/10=15.3=15/
}
console.log(temp==sum?'armstrong':'not armstrong');
