const arrayOfNumber=[2,5,8,5,6];
let sum=arrayOfNumber.reduce((value,runningTotal)=>{
return value+runningTotal;
});
console.log('====================================');
console.log(sum);
console.log('====================================');