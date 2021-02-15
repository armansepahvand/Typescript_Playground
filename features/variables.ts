let apples: number= 5

apples=1;

let speed: string="fast";

let nothingMuch: null =null;
let nothing: undefined;


//Arrays Annotation and inference
let colors:string[] = ["red", "green", "blue"];
let myNumbers: number[] = [2,4,6]

//Classes Annotation and inference
class Things{

}

let cathing:Things = new Things();

//Object literal Annotation and inference

let point: {x:number; y:number}={
    x:10,
    y:20
};

//Function Annotation and inference
const logNumbr: (i:number)=>void = (i)=>{
    console.log(i);
};


//When to use annotations
// 1) Function that returns the "any" type
const json= '{"x":10, "y":20}';
const coordinates:{x:number; y:number} = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
//and iniotialize it later

let words= ["red", "green", "blue"];
let foundWord: boolean;

for(let i=0; i<words.length; i++){
    if (words[i]==='green'){
        foundWord=true;
    }
}

// 3) Variable whos type cannot be inferred correctly
let numbers= [-10,-1,3];
let numberAboveZero: boolean | number = false;
for(let i=0; i<numbers.length; i++){
    if (numbers[i]>0){
        numberAboveZero=numbers[i];
    }
}


