var TcsEligibiltyCheak = function (arg1, arg2, arg3, Cand_name) {
    var result = arg1 >= 70 || arg2 >= 80 || arg3 >= 90 ? ` "Congtulation ${Cand_name},You are Eligibile for TCS Interview  "` : ` "Unforunately ${Cand_name},You are not Eligibile for TCS Interview "`;
    console.log(result);


}
TcsEligibiltyCheak(75, 82, 90, "Anushil");
TcsEligibiltyCheak(50, 60, 75, "Amar");
TcsEligibiltyCheak(76, 80, 56, "Sachin");
