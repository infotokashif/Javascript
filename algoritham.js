// Find maximum number from array
const  arr = [1,4,3,2,4,7];

const max =arr.reduce((acc,curr)=> Math.max(acc,curr))
console.log(max)

// another way to find maximum number
const  arr = [1,4,3,2,4,7];

let max=0;

arr.forEach((elem)=>{
    // max = max<elem ? elem : max;
    max = Math.max(max,elem)
})
console.log(max)

// How to find Cost of travell
const costoftravel=(d,mi,costofpetrol)=>{
    const fuelrequired = d/mi;
    
        const totalcost= fuelrequired*costofpetrol;
        return Math.ceil (totalcost);
        //  math.ceil is liabrary which is use to convert final output from decimal point to round figure, in this case firstly a value is 2584.64 after math.ceil final output is 2585.......
    }
    console.log(costoftravel(80,60,110))


    // How to find Bigger Number......
    function biggerNum(num1,num2){
        if (num1>num2){
                big=num1;
        } else {
             big=num2;   
        }return big;
}
console.log(biggerNum(72,73));


