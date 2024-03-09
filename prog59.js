p = [10,11,12,20,30]
q = [11,20,25,30,33]

//w.a.p to find the common numbers between the given two array 11,20,301

isfound=false
i=0
j=0
count=0

while (i<=p.length-1 && j<=q.length-1) {
    count+=1
    if(p[i]==q[j]){
        isfound=true
        console.log(p[i]);
        i++
        j++
    }
    else if(p[i]<q[j]){
        i++
    }
    else{
        j++
    }
}
!isfound && console.log('no common number');
console.log(count);