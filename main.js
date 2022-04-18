const sexo = document.querySelectorAll('.sexo');
const campoInput = document.querySelectorAll('.campoInput');
const Obs = document.querySelectorAll('.Obs');
const btn = document.querySelector('#btn')

const calculo = (e) =>{
  e.preventDefault();

  let nome = campoInput[0].value;
  let idade = campoInput[1].value;
  let IMC = (campoInput[2].value/(campoInput[3].value*campoInput[3].value)).toFixed(2);
}

btn.addEventListener('click',calculo);

const valida1 = () =>{
   if(campoInput[0].value.length < 4 || campoInput[0].value.length > 30)
   {
       Obs[0].textContent = 'Campo nao preenchido corretamente';
       Obs[0].style.color = 'red'   ;   
   }
   else
   {
    Obs[0].style.color = 'green'   ;
    Obs[0].textContent = 'preenchimento correto';
   }
}
const valida2 = () =>{
if(campoInput[1].value.length  < 1 || campoInput[1].value.length > 2)
   {
       Obs[1].textContent = 'Campo nao preenchido corretamente';
       Obs[1].style.color = 'red'   ;   
   }
   else
   {
    Obs[1].style.color = 'green'   ;
    Obs[1].textContent = 'preenchimento correto';
   }
}
const valida3 = () =>{
    if(campoInput[2].value.length < 2 || campoInput[2].value.length > 3)
   {
       Obs[2].textContent = 'Campo nao preenchido corretamente';
       Obs[2].style.color = 'red'   ;   
   }
   else
   {
    Obs[2].style.color = 'green'   ;
    Obs[2].textContent = 'preenchimento correto';
   }
}

const valida4 = () =>{
    if(campoInput[3].value.length < 1 || campoInput[3].value.length > 3)
    {
        Obs[3].textContent = 'Campo nao preenchido corretamente';
        Obs[3].style.color = 'red'   ;   
    }
    else
    {
     Obs[3].style.color = 'green'   ;
     Obs[3].textContent = 'preenchimento correto';
    }
}