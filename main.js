const container = document.querySelector('#container');
const campoInput = document.querySelectorAll('.campoInput');
const Obs = document.querySelectorAll('.Obs');
const btn = document.querySelector('#btn')
const informarSection = document.querySelector('#informarSection');
const btnVoltar = document.querySelector('#btnVoltar');

const calculo = (e) =>{
  e.preventDefault();
  
  let nome = campoInput[0].value;
  let idade = campoInput[1].value;
  let IMC = (campoInput[2].value/(campoInput[3].value*campoInput[3].value)).toFixed(2);

//   let mostraNome = document.querySelector('#mostraNome');
//   let spanResul = document.querySelector('#spanResul');
  let textResul = document.querySelector('#textResul');

    if(IMC < 18.5)
    {
        textResul.textContent = 'Abaixo do peso';
    }
    else if(IMC >= 18.5 || IMC <= 24.5)
    {
        textResul.textContent = 'peso ideal';
    }
    else if(IMC > 24.5 || IMC <= 30)
    {
        textResul.textContent = 'acima do peso';
    }
    else if(IMC > 30 || IMC <= 40)
    {
        textResul.textContent = 'acima do peso dois';
    }
    else if(IMC > 40)
    {
        textResul.textContent = 'acima do peso tres';
    }

    informarSection.style.display = 'flex';
    container.style.display = 'none';
    
}

if(campoInput[0].value !== '' && campoInput[1].value !== '' && campoInput[2].value !== '' 
&& campoInput[3].value !== '' && campoInput[4].value !== '' && campoInput[5].value !== '')
{
   btn.addEventListener('click',calculo);
}
else
{
    alert('Todos os campos sao obrigatorios');
}

btnVoltar.addEventListener('click',() =>{
    informarSection.style.display = 'none';
    container.style.display = 'flex';
})
//--------------------------------------------------------------------

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