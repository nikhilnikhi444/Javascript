
function parent(){
    const parent='parent'
    console.log(`variabale inside the parent function is :${parent}`);
    console.log(`variable inside the child function is :${childvariable}`);

    function child(){
        const childvariable='child'
        console.log(`variabale inside the parent function is :${parent}`);
        console.log(`variable inside the child function is :${childvariable}`);
    }
    child()
}


parent()