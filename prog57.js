const arr =[11,10,2,4,3,12]


//Algorithm
//1) sort the given array
//2) find the mid = low+up/2
//3) mid == searchitem - found
//4) mid>searchitem
        //up = mid-1
//5) mid<searchitem 
       //low = mid+1
//6) repeat still low=up

searchkey=11
low=0
up=arr.length-1
ispresent=false
count=0
arr.sort((a,b)=>a-b)

while (low<=up) {
   count=count+1
   mid=Math.floor((low+up)/2)
   if(arr[mid]==searchkey){
      ispresent=true
      break
   }
   else if(arr[mid]>searchkey){
      up = mid -1
   }
   else{
      low=mid+1
   }
}
console.log(ispresent ? `${searchkey} found`:`${searchkey} is not found`);