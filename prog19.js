num=123
str=''
while(num>0){//123>0//12>0//1>0//
    ld = num%10
    str = str+ld
    num=Math.floor(num/10)
}
console.log(str);