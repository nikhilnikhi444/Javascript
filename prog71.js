// check whether the given number is a mobile number or not
str='1234567891'

console.log(str.length=10?'is a mobile number':'not a mobile number');

const validate=(num)=>{
    return num.length==10?'is a mobile number':'not a mobile number'
}
console.log(validate('1234567891'));
//w.a.p to check whether a email id is gamil or not


mail='allen@gmail.com'
console.log(mail.endsWith('@gmail.com')?'its a mail id':'not mail id');

// w.a.p to check whether a given string starts with a letter q or not

word='sfskff'
console.log(word.startsWith('q'))||(word.startsWith('Q')?'starts with q ':'not starts withq');