
const input = document.querySelector(".num-mask");
const input = IMask(element, {
    mask: Number, 
    scale: 2,  
    signed: false, 
    thousandsSeparator: '', 
    padFractionalZeros: false, 
    normalizeZeros: true,  
    radix: ',', 
    mapToRadix: ['.'] ,
    min: -100000000000,
    max: 1000000000000,
  });
  
function input (i,m,n){
return n*i*m;

}

console.log(input(1,5,7))