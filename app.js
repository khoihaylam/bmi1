let height=document.forms.height
// console.log(height)
let weight=document.forms.weight
// console.log(weight)
let h2=document.getElementById("ketqua")
let h3=document.getElementById("weightcondition")
function tinhbmi(){
    let number1=Number(height.value)
    let number2=Number(weight.value)
    h2.innerHTML=(number1)/(number2*number2)
}
function dieukien(){
    if(h2.innerHTML<18.5){
        h3.innerText="can nang thap"
    }
    else if(h2.innerHTML>=18.5 &&h2.innerHTML<=24.9){
        h3.innerText="binh thuong"
    }
    else if(h2.innerHTML>=25 &&h2.innerHTML<=29.9){
        h3.innerText="hoi beo"
    }
    else if(h2.innerHTML>=30 &&h2.innerHTML<=34.9){
        h3.innerText="beo phi cap do 1"
    }
    else if(h2.innerHTML>=35 &&h2.innerHTML<=39.9){
        h3.innerText="beo phi cap do 2"
    }
    else{
        h3.innerText="beo phi cap do 3"
    }
    return h3.innerText
}
// xomg project bmi