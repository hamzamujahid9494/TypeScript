console.log("Hello");
///assignment 3
function change(temp:number) {console.log(temp*9/5)
    
}
change(12)
function convertCtoF(tempcelsius:number[]):number[] {
    const convertedtemp:number[]=[]
    let i=0
    while (i<tempcelsius.length) {
        const celsius =tempcelsius[i]
        const fahrenhit =(celsius*9/5)+32
        convertedtemp.push(fahrenhit)
        i++
        
    }
    return convertedtemp

    
}
const celsius:number[]=[12, 9.98]
const fahrenhit:number[]= convertCtoF(celsius)
console.log(fahrenhit)
//function
function insertValueAtIndex(arr: any[], index: number, value: any): any[] {
    arr.splice(index, 0, value);
    return arr;
}

const originalArray = [1, 2, 3, 4, 5];
const indexToInsert = 2;
const valueToInsert = 99;

const modifiedArray = insertValueAtIndex(originalArray, indexToInsert, valueToInsert);
console.log(modifiedArray); 
//function
 const shoppingCart:{item:string; quantity:number}[]=[]
function addItem(item: string, quantity: number) {
    shoppingCart.push({ item, quantity });
    console.log("Item added to cart:", item);
    printCartContents();
}

function removeItem(itemIndex: number) {
    if (itemIndex >= 0 && itemIndex < shoppingCart.length) {
        const removedItem = shoppingCart.splice(itemIndex, 1)[0].item;
        console.log("Item removed from cart:", removedItem);
        printCartContents();
    } else {
        console.log("Invalid item index.");
    }
}

function updateQuantity(itemIndex: number, newQuantity: number) {
    if (itemIndex >= 0 && itemIndex < shoppingCart.length) {
        shoppingCart[itemIndex].quantity = newQuantity;
        console.log("Quantity updated for item:", shoppingCart[itemIndex].item);
        printCartContents();
    } else {
        console.log("Invalid item index.");
    }
}

function printCartContents() {
    console.log("Cart Contents:");
    for (const cartItem of shoppingCart) {
        console.log(`${cartItem.item} - Quantity: ${cartItem.quantity}`);
    }
    console.log();
}

addItem("Apple", 3);
addItem("Banana", 2);
addItem("Orange", 5);

removeItem(1);

updateQuantity(0, 10);
//function
let count =1
while (count<=25) {console.log(count)
    count++
    
}
//function factorial
function calculateFactorial(number: number): number {
    if (number < 0) {
        throw new Error("Input must be a positive integer");
    }
    
    let factorial = 1;
    let currentNumber = number;
    while (currentNumber > 0) {
        factorial *= currentNumber;
        currentNumber--;
    }
    return factorial;
}
function removeNegativeNumbers(numbers: number[]): number[] {
    const filteredNumbers = [];
    for (const num of numbers) {
        if (num >= 0) {
            filteredNumbers.push(num);
        }
    }
    return filteredNumbers;
}

const numbersArray: number[] = [5, -2, 10, -8, 15, -3];
const positiveNumbersArray = removeNegativeNumbers(numbersArray);
console.log(positiveNumbersArray);
//function
function calculateSum(numbers: number[]): number {
    let sum = 0;
    let index = 0;
    while (index < numbers.length) {
        sum += numbers[index];
        index++;
    }
    return sum;
}

const numbers: number[] = [5, 10, -3, 8, 12];
const totalSum = calculateSum(numbers);
console.log("Sum:", totalSum);