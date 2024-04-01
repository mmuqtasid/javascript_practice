//Generate Sequence  (1 , 2,3 , 5 , 7 , 11  ..............) with range (1-100);

function  generateSequence(start, end){
    let sequence = [];
     for(let i= start; i <=end ;i++){
         if(i%2!==0){
             sequence.push(i);
         }
     }
      return sequence;
}
console.log(generateSequence(1,100));

