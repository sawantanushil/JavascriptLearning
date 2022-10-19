
var stringHandsOn = function() {
    var result="     Hey you are doing good, keep it up      ";
    console.log(result);
    console.log(">>>>>Length()>>>>>");
    console.log(result.length);
    console.log(">>>>>Before trim()>>>>>");
    console.log(result.length);
    var res=result.trim();
    console.log(">>>>>After trim()>>>>>");
    console.log(res.length);
    result.indexOf();
    console.log(">>>>>After step 3>>>>>");
    console.log(res.length);
    var res1=res.substring(18,22);
    console.log(res1);
    console.log(">>>>>Substring>>>>>");
    console.log(res.length);
    var res1=res.substring(0,22);
    console.log(res1);
    
    console.log(">>>>>sprint>>>>>");
    console.log(res.length);
    var res1=res.split(0,22);
    console.log(res1);
    console.log(">>>>>includes >>>>>");

    console.log(result.includes("up"));
    console.log(">>>>>includes >>>>>");

    console.log("Start string with Hey is-",result.includes("Hey"));


    
    



    
}
stringHandsOn();
