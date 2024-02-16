num=121
str=''
temp=num
while(num>0){
    ld = num%10
    str = str+ld
    num=Math.floor(num/10)
}
if (temp==str) {
    console.log('palindrom');
}
else{
    console.log('not palindrom');
}