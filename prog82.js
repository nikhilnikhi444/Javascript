accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log(`total number of accounts is ${accounts.length}`);
console.log('-------------------------------------');

//2. print account number whose ac_type is savings
accounts.filter(item=>item.ac_type=='savings').forEach(element => {console.log(element.acno);
    
});
console.log('-------------------------------------');

//3.print the balance of accnount number 1000
acbalance=accounts.find(item=>item.acno==1000)
console.log(acbalance.balance);
console.log('-------------------------------------');

//4. print all gpay transactions
accounts.map(item=>item.transaction).flat().filter(data=>data.mode=='gpay').forEach(d=>console.log(d))
console.log('-------------------------------------');

//5. print all transaction whose amount > 5000
accounts.map(item=>item.transaction).flat().filter(data=>data.amount>5000).forEach(d=>console.log(d))

console.log('-------------------------------------');

//6. print credit transaction of account 1002
credit=accounts.map(item=>item.transaction).flat().filter(data=>data.to==1002)
console.log(credit);

console.log('-------------------------------------');
//7. print debit transaction of account 1002
debit=accounts.find(item=>item.acno==1002).transaction
console.log(debit);
console.log('-------------------------------------'); 

//8. print transaction history of 1002
transhis ={
    credit:credit,
    debit:debit
}
console.log(transhis);
console.log('-------------------------------------');

//print as array
transhis1=[...credit,...debit]
console.log(transhis1);
console.log('-------------------------------------');

//9. print highest balance account details
highestbalance=accounts.reduce((ac1,ac2)=>ac1.balance>ac2.balance?ac1:ac2)
console.log(highestbalance);