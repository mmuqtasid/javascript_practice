// //Generate Sequence of prime number  (1 , 2,3 , 5 , 7 , 11  ..............100) with range (1-100);

function  generatePrimeNumber(start, end){
    let arr = [];
    for(let i= start; i <=100 ;i++){
        if(isPrime(i)){
            arr.push(i);
        }
    }
     return arr;
}

function isPrime(num){
    for(let i=2; i< num/2 +1; i++ ){
        if(num % i == 0){
           return false;  
        }
    }
    return true;
}
console.log(generatePrimeNumber(1,100));
