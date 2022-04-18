let camposInput = document.querySelectorAll('#Campo');
let man = document.querySelector('#man');
let homan = document.querySelector('#homan');
let btn = document.querySelector('#btn');

function calculo(e)
{
  e.preventDefault();
  
  let IMC = (camposInput[2].value / (camposInput[3].value * camposInput[3].value)).toFixed(1);
  let spanResul = document.querySelector('#spanResul');
  spanResul.innerHTML = IMC+'kg/m2';
  let mostraNome = document.querySelector('#mostraNome').innerHTML= camposInput[0].value;
  let msg = document.querySelector('#inforResul');
  
  if(IMC == NaN)
  {
    msg.innerHTML = 'Por favor, coloque as informmacoes necessarias';
  }
  else if(IMC < 18.5)
  {
    msg.innerHTML = 'De acordo com a Organizacao Mundial da Saude,seu IMC esta abaixo do recomendado para a sua altura. Para atingir um valor de IMC normal,seu peso deve estar entre ';
  }
  else if((IMC >= 18.5) || (IMC <= 24.9))
  {
    msg.innerHTML = 'De acordo com a Organizacao Mundial da Saude,seu IMC esta normal para a sua altura. Para manter o valor de IMC normal,seu peso pode variar entre ';
  }
  else if((IMC > 24.9) || (IMC <= 29.9))
  {
    msg.innerHTML = 'De acordo com a Organizacao Mundial da Saude,seu IMC esta acima do recomendado para a sua altura. Para atingir um valor de IMC mormal, seu peso deve estar entre ';
  }
  else if((IMC >= 30) || (IMC <= 34.9))
  {
    msg.innerHTML = 'De acordo com a Organizacao Mundial da Saude,seu IMC esta acima do recomendado para a sua altura. Para atingir um valor de IMC mormal, seu peso deve estar entre ';
  }
  else if((IMC >= 35) || (IMC <= 39.9))
  {
    msg.innerHTML = 'De acordo com a Organizacao Mundial da Saude,seu IMC esta acima do recomendado para a sua altura. Para atingir um valor de IMC mormal, seu peso deve estar entre ';
  }
  else
  {
    msg.innerHTML = 'De acordo com a Organizacao Mundial da Saude,seu IMC esta acima do recomendado para a sua altura. Para atingir um valor de IMC mormal, seu peso deve estar entre ';
  }
}

btn.addEventListener('click',Calculo);

btn.addEventListener('click',function(){
  
    let InformaNivel = document.querySelectorAll('#Informa');
    
    
});

/*
let Obs = document.querySelectorAll('#Obs');

function valida1()
{
  //-------------------CAMPO DO NOME----------------------
  if(camposInput[0].value.length < 3)
  {
    camposInput[0].style.border='2px solid #f00';
    Obs[0].innerHTML = '*!Campo Obrigatorio!';
    Obs[0].style.color = 'red';
  }
  else
  {
    camposInput[0].style.border='2px solid #0f0';
    Obs[0].innerHTML = 'Campo Preenchido!';
    Obs[0].style.color='green';
  }
}
 
 function valida2()
 { 
  //-------------------CAMPO DA IDADE----------------------
  if(camposInput[1].value.length > 0)
  {
      camposInput[1].style.border='2px solid #0f0';
      Obs[1].innerHTML = 'Campo Preenchido!';
      Obs[1].style.color = 'green';
  }
  else
  {
      camposInput[1].style.border = '2px solid #f00';
      Obs[1].innerHTML = '*!Campo Obrigatorio!';
      Obs[1].style.color = 'red';
  }
 }
  
  function valida3()
  {
  //-------------------CAMPO DO PESO----------------------
  if(camposInput[2].value.length > 1)
  {
      camposInput[2].style.border='2px solid #0f0';
      Obs[2].innerHTML = 'Campo Preenchido!';
      Obs[2].style.color = 'green';
  }
  else
  {
      camposInput[2].style.border = '2px solid #f00';
      Obs[2].innerHTML = '*!Campo Obrigatorio!';
      Obs[2].style.color = 'red';
  }
}
  
  function valida4()
  {
  //-------------------CAMPO DA ALTURA----------------------
  if(camposInput[3].value.length > 0)
  {
      camposInput[3].style.border = '2px solid #0f0';
      Obs[3].innerHTML = 'Campo Preenchido!';
      Obs[3].style.color = 'green';
  }
  else
  {
    camposInput[3].style.border = '2px solid #f00';
    Obs[3].innerHTML = '*!Campo Obrigatorio!';
    Obs[3].style.color = 'red';
  }
}
*/