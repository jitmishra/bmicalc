function bmiCal(weight, height){
    var bmi=weight/ Math.pow (height,2);
    return bmi;
}
var bmi = bmiCal(85,1.9)
console.log(Math.round(bmi));
