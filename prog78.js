text = 'hai hello all hello world all'

// w.a.p to find the world count in the given text 
obj={}
words=text.split(' ')
// console.log(words);

for(let word of words){
    if(word in obj){
        obj[word]+=1
    }else{
        obj[word]=1
    }
}
console.log(obj);
console.log('----------------');
wc={}
text.split(' ').map(element =>element  in wc?wc[element]+=1:wc[element]=1);
console.log(wc);

console.log('-------------------------------------');

