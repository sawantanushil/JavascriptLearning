const arrayNumber=[10,20,30,40,10];
arrayNumber.forEach(function(currentValue,index,array)
{
    console.log(currentValue,index,array);
});

arrayNumber.forEach((currentValue,index) =>{
    if(currentValue<0)
    console.log(currentValue,index);
});