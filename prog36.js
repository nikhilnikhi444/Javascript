
//    *
//   * *
//  * * *
// * * * *
//* * * * *
// * * * *
//  * * *
//   * *
//    *




for(row=1;row<=5;row++){
    str=""
    for(sp=4;sp>=row;sp--){
        str=str+" "
    }
    for(col=1;col<=row;col++){
        str=str+" *"
    }
    console.log(str);
}

for(row=1;row<=4;row++){
    str1=""
    for(sp=1;sp<=row;sp++){
        str1=str1+" "
    }
    for(col=4;col>=row;col--){
        str1=str1+" *"
    }
    console.log(str1);
}