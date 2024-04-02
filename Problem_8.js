// [59 , 3.5 , 2 , '9' , '6.6' , '5.125' , '3' , 60]
//Write program to identify types in an array automatically , output should be in following format .
// 59 , 2 , 60 

function  typeofElement(arr){
    let result = [];
    for (let i=0;i< arr.length ; i++){
        if(typeof arr[i] == "number"){
            result.push(arr[i]);
        }
    }
   return result;
}
console.log(typeofElement([59,3.5,2,'9','6.6','5.125',"3",60]));