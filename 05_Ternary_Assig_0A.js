console.log(">>>>>>>Normal Function useing>>>>>>>");

function maleMarriageEligibility(gender, age, boyName) {
    var result = gender == "male" && age >= 21 ? `Hey ${boyName} you are eligibile for Marriage `:` Hey ${boyName} you are not eligibile for Marriage`;  
    return result;
}
console.log(maleMarriageEligibility("male", 26,"Anil"));
console.log(maleMarriageEligibility("male", 18,"Sunil"));
console.log(maleMarriageEligibility("female", 22,"Aarti"));
