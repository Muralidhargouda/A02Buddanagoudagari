
function calc(){
var principle= document.getElementById("t01").value;
var rate= document.getElementById("t02").value;
var simpleInter=document.getElementById("r01");
var compoundInter=document.getElementById("r02");
var month=document.getElementById("r03");
var year=document.getElementById("r04");
if((principle!==""&&principle>0)&&(rate!==""&&rate>0))
{
if(month.checked){
    var month1=prompt("enter no.of months");
    term=parseFloat(month1)/12;
}
else if (year.checked){
    var year1=prompt("enter no.of years");

    term=parseFloat(year1);
}
else{
    alert("please select an option");
}
if (simpleInter.checked)
{
    
var simple=parseFloat(principle*rate*term)/100;
var total= parseFloat(principle) + parseFloat(simple);
    document.getElementById("t04").innerHTML="The simple interest amount is:"+simple.toFixed(2);
    document.getElementById("t05").innerHTML="Total amount to be paid is:"+total.toFixed(2);
}
else if(compoundInter.checked)
{
var times=prompt("how many times it is compounded per year:");

var compound=((principle * Math.pow((1 + ((rate/times)/100)),term*times))-principle);
var total1=parseFloat(compound)+parseFloat(principle);
document.getElementById("t04").innerHTML="The compound interest amount is:"+compound.toFixed(2);
document.getElementById("t05").innerHTML="Total amount to be paid is:"+total1.toFixed(2);
}

else{
    alert("Please select an option");
}
}
else{
    alert("enter every field/enter only positive numbers");
}
}
