var imgAtual = "img/sofa.gif";
var imgAnterior = "img/sofa1.png";
let botao1 = document.getElementById('botao1');
let botao2 = document.getElementById('botao2');


function trocar () {
    document.getElementById('figura').src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;
   
}

botao1.addEventListener('click', function(){
    document.querySelector('.active-360').style.display = 'none';
    document.querySelector('.stop-360').style.display = 'block';
})

botao2.addEventListener('click', function(){
    document.querySelector('.active-360').style.display = 'block';
    document.querySelector('.stop-360').style.display = 'none';
})
