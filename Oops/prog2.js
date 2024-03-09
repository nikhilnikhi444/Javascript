// create class


class student{
    // porperty 
    stdRollno
    stdName
    stddiv
    stdage
    // constructor
    constructor(rollno,sname,div,age){
        this.stdRollno=rollno
        this.stdName=sname
        this.stddiv=div
        this.stdage=age
        this.display()
    }
    // method
    display(){
        console.log(`student name is ${this.stdName},division is ${this.stddiv} and age is ${this.stdage}`);
    }
}

// create Object

obj=new student(1,'neel','A',17)
// obj.display()
obj2=new student(2,'Anu','B',18)