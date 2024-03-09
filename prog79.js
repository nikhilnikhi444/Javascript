// w.a.p to find the number of count from the given array

arr=[10,20,50,20,30,80,10,20,70,50,20,10]


count={}

arr.map(element=>element in count?count[element]+=1:count[element]=1);
console.log(count);

console.log('--------------------------------');
// w.a.p to find the first recursive letter

pattern = 'ABCBACCBAA'

characters=Array.from(pattern)


obj={}
for(let char of characters){
    if(char in obj){
        console.log(`first recursive letter is ${char}`);
        break
    }else[
        obj[char]=1
    ]
}