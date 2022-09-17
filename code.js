const h1 = document.querySelector("h1");

const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");

const btn = document.querySelector("#btnCalcular");

const p = document.querySelector("#resultado");

const form = document.querySelector("#formulario")


form.addEventListener("sumbit",() =>{
    
})

btn.addEventListener("click",()=> {
   let result = Number(input1.value) +  Number(input2.value);
   console.log(result);
   p.textContent = "El resultado es " + result;
})

