// w.a.p to print all vowels in the given string
sentence='Good Evening All'

vowel = ['a','e','i','o','u','A','E','I','O','U']
p=[]
characters=sentence.toLowerCase().split('')

for(let char of characters){
    if(vowel.includes(char)&& !p.includes(char)){
        p.push(char)
    }
}
console.log(p);
q=[]
a=Array.from(sentence.toLowerCase()).filter(item=>(vowels.includes(item)&& !q.includes(item))&& q.push(item))
console.log(a);