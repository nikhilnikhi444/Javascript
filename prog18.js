num=2
i=1
p=0
while (i<=num) {
    p=p*10+(num*i)
    i++
}
console.log(p);

//2nd pattern//
num=5
i=1
str=''
while(i<=num){
    str=str+i //'+1='1'//'1'+2='12'//'12'+3='123'//
    i++
}
console.log(num*str);

//3rd pattern//

n=4
j=1
s=''
sum=0
while(j<=n){
    s=s+n
    sum=sum+Number(s)
    j++
}
console.log(sum);