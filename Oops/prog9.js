class A {
    methoda(){
        console.log('inside class a');
    }
}
class B extends A{
    methoda(){
        console.log('inside class b');
    }
    methoda(){
        console.log('inside class b and second function');
    }
}

obj= new B()
obj.methoda()