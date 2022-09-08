let x:number=1;
let y:string= "Aman";


let flag:boolean= true;
flag=false;

let first:number[]=[4,5,6];
let second:number[]=[...first,7]

const  add= (a:number,b:number):number=>{
   return a+b;
}
console.log(add(1,2));


type Human = {
    hasLegs:boolean;
    veg:boolean;
}

type User = {
    username:string;
    age:number;
    iSmarried:boolean;
    salary?:number;
    species:Human;
}


const  masai : User={
    username:"Aman",
    age:21,
    iSmarried:false,
    species:{
        hasLegs:true,
        veg:true
    },
    salary:8944,
}
const yoga: User= {
    username:"Naman",
    age:32,
    iSmarried:false,
    species:{hasLegs:true,veg:true}
}

interface School {
 dressColor: string;
 code:number;
}

const keshav:School= {
    dressColor:"blue",
    code:121
}


type Animal = {
    noOflegs:number,
    hasWings:boolean;
}

type Dog = {
    food:string;
    breed:string;
}

const myDog:Animal & Dog= {
 hasWings:false,
 noOflegs:4,
 breed:"lebra",
 food:"Dalbhat"
}

// interface Animal{
//     hasfur:boolean;
//     noOflegs:number;
// }

// interface Dogs extends Animal{
//     breed:string;
//     food:string
// }

// const myDog:Dogs= {
//     breed:"lebra",
//     food:"Bread",
//     hasfur:true,
//     noOflegs:4,
// }


type Info={
 name:string;
 age:number
}

const Schooldata:Info[]=[{name:"Aman",age:32},{name:"Naman",age:43}]


type CandianAddress= {
    street:string;
    provinces?:string;
}

type UsAddress={
    street:string;
    state:string;
}

type GermanAddress={
    street:string;
    region:string;
}

type Adrress= UsAddress&GermanAddress&CandianAddress;

const myAddress:Adrress={
    street:"BHColony",
    region:"patna",
    state:"bihar"
}