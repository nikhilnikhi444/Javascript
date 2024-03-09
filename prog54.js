p = [10,11,12,20,30]
q = [11,20,25,30,33]

//w.a.p to find the common numbers between the given two array 11,20,30
isfound=false
for(n of p){
    for(m of q){
        if(n==m){
            isfound=true
            console.log(n);
        }
    }
}
!isfound && console.log('no duplicate');   