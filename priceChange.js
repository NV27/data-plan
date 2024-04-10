console.log("priceChange.js connected");
var p1 = document.querySelector(".basic-price");
var p2 = document.querySelector(".pro-price");
var p3 = document.querySelector(".master-price");
var b1 = document.querySelector(".annually");
var b2 = document.querySelector(".monthly");
var m1 = 19.99;
var m2 = 24.99;
var m3 = 39.99;

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

b1.addEventListener("click", annualPrices);
b2.addEventListener("click", monthlyPrices)
