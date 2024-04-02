//Write a Program to check  whether the given number is prime or not.

function  CheckPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(CheckPrime(7));