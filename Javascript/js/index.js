//document.getElementById("res").innerHTML="Meu primeiro texto <strong>Javascript</strong>";

 
function enviar(){
    var p = document.getElementById('res');
    var texto = document.getElementById('caixa').value;
    p.innerHTML = texto;
};  
var x = 19
document.getElementById("Variavel").innerHTML = x;
function Clicou(){
    var x=10?  x = 8 :  x = 10;
    document.getElementById("Variavel").innerHTML = x;
}

const lista = [];
/*
lista[0]= "jalim";
lista[1] = 'rabei';
lista[2] = 'safado';
*/


let pLista = document.getElementById("lista");
let item = document.getElementById("L");
pLista.innerHTML = lista;

function adicionar(){
    lista.push(item.value);
    pLista.innerHTML = lista.join(" ,");
    item.value = " "
}

