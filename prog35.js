//     *
//    *  *
//   *  *  *
//  *  *  *  *



for(row=1;row<=4;row++){
    str=""
    for(sp=4;sp>=row;sp--){
        str=str+" "
    }
    for(col=1;col<=row;col++){
        str=str+" *"
    }
    console.log(str);
}