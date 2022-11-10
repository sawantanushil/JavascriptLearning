const arrayName=[2,3,5,4];
const arrayOfNumber=arrayName.map((element,index)=>{
if(index<=2)
return element+5;
})
console.log(arrayName);
console.log(arrayOfNumber);
