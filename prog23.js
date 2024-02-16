
//w.a.p to display the numbers whose exponential is the range of 8-36
//- here the user can input the exponential value (power)

//power 

power=2
num=1
low=8
up=36
while (num<=36) {//1<=36 // 2<=36 //3<=36
    if (low<=num**power && num**power<=up) {//8<9 && 9<=36
       console.log(num); 
    }
    num++
}