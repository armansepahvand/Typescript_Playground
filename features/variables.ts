let apples: number= 5

apples=1;

let speed: string="fast";

let nothingMuch: null =null;
let nothing: undefined;


//Arrays Annotation and inference
let colors:string[] = ["red", "green", "blue"];
let myNumbers: number[] = [2,4,6]

//Classes Annotation and inference
class Car{

}

let car:Car = new Car();

//Object literal Annotation and inference

let point: {x:number; y:number}={
    x:10,
    y:20
};

//Function Annotation and inference
const logNumbr: (i:number)=>void = (i)=>{
    console.log(i);
};



