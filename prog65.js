a=[10,5,2,13,58,1]

// w.a.p to print all even numbers in the given array
even=a.filter(num=>num%2==0)
console.log(even);

// w.a.p to find all nubmbers greater than 10

x=a.filter(num=>num>10)
console.log(x);

// is there any number greater than 10
n=a.filter(num=>num>10)
console.log(n?'yes':'no');
