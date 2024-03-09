let fruits = ['Apple','Orange','Kiwi','pineapple']

console.log(fruits);


for(i=0;i<=fruits.length-1;i++){
    console.log(fruits[i]);
}



let  car = ['bmw','porsche','toyota','honda']
console.log(car);

for(i=0;i<=car.length-1;i++){
    console.log(car[i]);
}
console.log('-------------------------');

for(let y in fruits){
    console.log(fruits[y]);
}

console.log('-------------------------');

for(let z of fruits){
    console.log(z);
}
