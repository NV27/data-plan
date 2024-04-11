console.log("priceChange.js connected");
var p1 = document.querySelector(".basic-price");
var p2 = document.querySelector(".pro-price");
var p3 = document.querySelector(".master-price");
var b1 = document.querySelector(".annually");
var b2 = document.querySelector(".monthly");
var clicker = document.querySelector(".clicker");
var m1 = 19.99;
var m2 = 24.99;
var m3 = 39.99;
//b1.addEventListener("click", annualPrices);
//b2.addEventListener("click", monthlyPrices);

clicker.addEventListener("click", function(){
    clicker.classList.toggle("cLeft");
    console.log("clicker clicked")

    if (p1.innerHTML == m1){
        p1.innerHTML = Math.round(p1.innerHTML*=11)-0.01;
        p2.innerHTML = Math.round(p2.innerHTML*=11)-0.01;
        p3.innerHTML = Math.round(p3.innerHTML*=11)-0.01;
    }
    else{
        p1.innerHTML = m1;
        p2.innerHTML = m2;
        p3.innerHTML = m3;
    }
    

})

/*
//OLD version with individual buttons
const prices = [m1,m2,m3];

function increasePrice(inPrice){
    var outPrice;
    outPrice = Math.round(inPrice *= 11);
    outPrice = outPrice -= 0.01;

    console.log(`New Price is ${outPrice}`)
    return outPrice;
}

function annualPrices(){

    p1.innerHTML = increasePrice(m1);
    p2.innerHTML = increasePrice(m2);
    p3.innerHTML = increasePrice(m3);

}

function monthlyPrices(){

    p1.innerHTML = m1;
    p2.innerHTML = m2;
    p3.innerHTML = m3;

}
*/

