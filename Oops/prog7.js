class A {
    methoda(){
        console.log('inside frist method');
    }
    methoda(n){
        this.n1=n
        console.log('inside second method and the argument passed is :',this.n1);
    }
}