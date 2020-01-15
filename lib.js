module.exports.myfoo = () => 'myfoo';
module.exports.muti = (x) => {
    console.log("Multiplication table " + x);
    for (var i = 0; i < 12; i++) {
        console.log(x + "*" + i + "=" + x * i);
    }
};

module.exports.avg = (e) => {
    let sum = 0;
    let g = [];
    g = e;
    for (let i = 0; i < g.length; i++) {
        sum = sum + g[i];
    }
    return "Average grade = "+sum / g.length;
}

module.exports.bmi = (e) => {
    let bmical = e[0].weight / (e[0].height * 2);

    if (bmical < 18.5) {
        return "BMI = " + bmical + "=> " + "Too thin";
    }
    else if (bmical >= 18.6 && bmical <= 22.9) {
        return "BMI = " + bmical + "=> " + "Normal weight";
    }
    else if (bmical >= 23.0 && bmical <= 24.9) {
        return "BMI = " + bmical + "=> " + "Overweight";
    }
    else if (bmical >= 25.0 && bmical <= 29.9) {
        return "BMI = " + bmical + "=> " + "fat";
    }
    else if (bmical >= 30.0) {
        return "BMI = " + bmical + "=> " + "Too fat";
    }
}


module.exports.currencyBath = (x) => x + " bath = " + x * 0.033 + " dollar";

module.exports.discount = (e) =>{

    
    console.log("Product price = "+e.priceProduct);
    console.log("Discount percantage = "+e.discountPercen+"%");
    console.log("Discount  = "+((e.priceProduct*e.discountPercen)/100)+"Bath");
    console.log("Product price less discount   = "+(e.priceProduct-((e.priceProduct*e.discountPercen)/100))+"Bath");



};




