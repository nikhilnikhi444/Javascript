class Bank{
    accountDetails={
        1000:{acno:1000,username:"userone",password:"userone",balance:5000},

        1001:{acno:1001,username:"usertwo",password:"usertwo",balance:4000},

        1002:{acno:1002,username:"userthree",password:"userthree",balance:10000},

        1003:{acno:1003,username:"userfour",password:"userfour",balance:3000}
    }
    //method to validate the account 
    validate(accountnumber){
        return accountnumber in this.accountDetails?true:false
    }
    // method to authenticate the account
    authenticate(Acnumber,pswd){
        if(this.validate(Acnumber)){
           if(this.accountDetails[Acnumber].password==pswd){
            console.log('Authendication successfully');
           }else{
            console.log('Invalid password');
           }
        }
        else{
            console.log('Invalid account number');
        }
    }
    // method to check the balance 
    acbalance(acnum,acpswd){
        if(this.validate(acnum)){
            if(this.accountDetails[acnum].password==acpswd){
                console.log(`Balance of ${acnum} is :${this.accountDetails[acnum].balance}`);
            }else{
                console.log('invalid password');
            }
        }else{
            console.log('invalid account');
        }
    }
    // method to transfer the money
  transfer(formacno,toacno,amount,frompswd){
    if(this.validate(formacno)&&this.validate(toacno)){
       if(this.accountDetails[formacno].password==frompswd){
            if(this.accountDetails[formacno].balance>amount){
              console.log(`balance of from acno ${formacno} is ${this.accountDetails[formacno].balance} and balance id from acno ${toacno} is ${this.accountDetails[toacno].balance} before money transfer`);
              this.accountDetails[formacno].balance-=amount
              this.accountDetails[toacno].balance+=amount
              console.log(`balance of from acno ${formacno} is ${this.accountDetails[formacno].balance} and balance of form acno ${toacno} is ${this.accountDetails[toacno].balance} after money transfer`);
            }else{
                console.log('insufficient balance');
            }
       }else{
        console.log('invalid password'); 
       }
    }
    else{
        console.log('invalid account'); 
    }

  }
}
user = new Bank()
console.log(user.validate(1000)?'account is valid':'no such account');
user.authenticate(100,'userne')
user.acbalance(1000,'userone')
user.transfer(1002,1000,100,'userthree')