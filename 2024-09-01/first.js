//create array
const arr=[1,2,3,4,5];
//find index of array element
function findIndex(arr, num){
    return arr.indexOf(num);
}
console.log(findIndex(arr,5));

//add two elements
function add(num1,num2){
    return num1+num2;
}

console.log(add(1,2));

//add two elements as ARROW function
const arrAddNumbers=(num1,num2)=>{return num1+num2};

console.log(arrAddNumbers(1,2));

//shorter version
const arrAddNumbersShort=(num1,num2)=> num1+num2;

console.log(arrAddNumbersShort(1,2));

//double brackets AKA NESTED


const addnumbersNested = (num1) => (num2) =>num1+num2

console.log(addnumbersNested(3)(4));

//ARROW FUNCTION 

const greet=(firstName)=>'Hello ' + firstName;

console.log(greet("Egle"))

//add +5 to each element

const addFive=arr.map(element=>element+5);
console.log(addFive);


//
const threeParams=arr.map((index,array,element)=>element+5);
//version 2

const threeParameters = newArray.map((element, index, array) => {
    console.log(element, index, array);
  
    const added = 1 + 2;
  
    return element + 5;
  });
  
  console.log({ threeParameters: threeParameters });
