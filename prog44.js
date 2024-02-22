function greet(name) {
    console.log(`hai ${name}`);
    child()
}
function child() {
    console.log('inside the child function');
}

greet('peter')