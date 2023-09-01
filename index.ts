``//assignment 
const removenumber=(numbers:Number[]):number[]=> {
    return numbers.filter(num=>num >= 0)//>=0 is condition greater than and equal to
    
}
const red =[12,-3,-6,6]
console.log(removenumber(red))
//const removenumber=(numbers: number[]): number[] => {
    //return numbers.filter(num => num >= 0);}
    //2
    const mulitiply =(numbers:Number[]):number[]=>{
        return numbers.map( num=> num *2);// map is used to modify the pervious array

    }
    const num:number[]=[1,23,4,7];
    console.log(mulitiply(num))
    //3
    const array=(strings:string[]):void[]=>{
        return strings.filter(string=>string.length<5)
    }
    const fruits:string[]=["apple","bananana","cherry", "date","grape"]
console.log(array(fruits))
//4
const nose =(numbers:number[]):number[]=>{
    return numbers.filter (num=>num%2==0) //use both map and filter

    .map(num =>num*num)
        
    }
const coun:number[]=[1,2,3,4,5,6,7,8,9]
console.log(nose(coun))
//5
const temp=(numbers:number[]):number[]=>{
    return numbers.map(num=>num*9/5 +32)
}
const celsiu:number[]=[0,10,20,30,40]
console.log(temp(celsiu))
//6
const coni=(numbers:number[]) :number[]=>{
    return numbers.filter(num=>num%2!==0)
    .map(num=>num*2)
}
const odd:number[]=[1,2,3,4,5,6,7]
console.log(coni(odd))
//7
const fore=(str:string[]):void[]=> {
    return str.forEach(str =>console.log(`${str}!`))
}
const names:string[]=["alice","bob","charlie","emily"]
console.log(fore(names))