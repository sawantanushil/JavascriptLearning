console.log("<<<<<<<<<<Break Statment>>>>>>>>>>");
for (let index = 0; index <10; index++) {
    
    if (index==5) {
        break;
    }   
  console.log(index);
}
console.log("<<<<<<<<<<Continue Statment>>>>>>>>>>");

for (let index = 0; index <10; index++) {
    if (index==2) {
        continue;
    }
    console.log(index);
    
}