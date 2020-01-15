let mo = require('./lib.js');
let mutiply = require('./lib.js');
let average = require('./lib.js');
let BMI = require('./lib.js');
let converter = require('./lib.js');
let discount = require('./lib.js');


console.log(mo.myfoo());
//----------------------------------------
//               การคูณ                   |
//----------------------------------------
console.log(mutiply.muti(2));


//----------------------------------------
//              เกรดเฉลี่ย                  |
//----------------------------------------
grade=[4.00,2.00];
console.log(average.avg(grade));

//----------------------------------------
//                BMI                    |
//----------------------------------------
infoBMI=[
    {
        weight:65,
        height:167
    },
]
console.log(BMI.bmi(infoBMI));

//----------------------------------------
//        currencycyconverter            |
//----------------------------------------
console.log(converter.currencyBath(100));

//----------------------------------------
//               ส่วนลดราคาสินค่า            |
//----------------------------------------
infoProduct={
    priceProduct:50,
    discountPercen:10,
}
console.log(discount.discount(infoProduct));
