function add(...arg) {
    console.log(arg);
    console.log(`sum is ${arg.reduce((n1,n2)=>n1+n2)}`);
}
add(10,20,30)