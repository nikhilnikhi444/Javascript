// create class


class employee{
    // porperty 
    empId
    empName
    empDesg
    empsalary
    // constructor
    constructor(id,ename,desg,salary){
        this.empId=id
        this.empName=ename
        this.empDesg=desg
        this.empsalary=salary
    }
    // method
    display(){
        console.log(`employee name is ${this.empName},designation is ${this.empDesg} and salary${this.empsalary}`);
    }
}

// create Object

obj=new employee(1,'neel','ui/ux',25000)
obj.display()

obj2=new employee(2,'maxwell','HR',25000)
obj2.display()

obj3=new employee(3,'ramesh','developer',25000)
obj3.display()

obj4=new employee(4,'suresh','ui/ux',25000)
obj4.display()