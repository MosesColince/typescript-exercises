//1
let sumFunc = (x: number, y: number): number => {
    return x + y ;
}
console.log(sumFunc(5,4));

//2
let Numreturn = (num: number): number => {
    return 5;
}

//3
let CondtionReturn = (Stringreturn: string, word?:boolean): string | boolean =>{
    if(word == true){
        return Stringreturn.toLowerCase();
    } else if ( word == false) {
        return Stringreturn.toUpperCase();
    }
return "invalid choice";
}
console.log(CondtionReturn("many cows", false))

