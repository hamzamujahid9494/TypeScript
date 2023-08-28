//assignment
function sumoffirst(n:number):number {
    let sum=0
    for (let i = 0; i <=2*n;i+=2){sum +=i}
    return sum
}
    
console.log(sumoffirst(5))
//2
/*function printeven(numbers:Number[]):void {
    for(const num of numbers){
        if ( num % 2===0){console.log(num)}}
    }
    let numbers:number[]=[1,2,3,4,5,6,7,8,9];

    printeven(numbers)*/
    
    function printEvenNumbers(numbers: number[]): void {
    for (const num of numbers) {
        if (num % 2 === 0) {
            console.log(num);
        }
    }}
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    printEvenNumbers(numbers); // Example: Printing even numbers from the array
    //3
    function remove(numbers:number[]):number[]
     {return numbers.filter(num=>num%2 !==0)
        
    }
    const orginal=[1,2,3,4,5,6]
    const oddnumber=remove(orginal)
    console.log(oddnumber)
    //4
    function calculate(radius:number) :number{
        return Math.PI*radius*radius

        
    }
    const radius=3
    const fire=calculate(radius)
    console.log(fire)
//4
const grades:number[]=[12,34,56,67,78,89,98]
for (let i = grades.length-1; i >=0;  i--) {
    if (grades[i]<50) {grades.splice(i,1)
        
    }
    
}
console.log(grades)
//5
function findlargest(numbers:number) 
{let largest:number =numbers[0];
     {
        if (numbers>largest) {
            largest=numbers
            
        }
        
        
    }

    return largest
}
    
const number:number[]=[12,23,45,67,89,98,65]
console.log(numbers)