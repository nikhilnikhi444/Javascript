// w.a.p to display all prime numbers in 50



for(i=2;i<=50;i++){
    count=0
    for(j=2;j<i;j++){
       if(i%j){
        count=count+1
        break
       }
    }
    if(count==0){
        console.log(i);
    }
}