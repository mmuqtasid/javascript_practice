//Add numbers using recursive function from an integer array 

function AddNum(arr) {
    if(arr.length < 1)
    return 0 ;
return arr.pop( ) + AddNum([...arr]) ;
}
console.log(AddNum([4,5,6,7]))  
