var ima=document.getElementById('imagen');
var testo=document.getElementById('texto');

function prender(){
	ima.src='pic_bulbon.gif';
	testo.innerHTML=ima.src;
}

function apagar(){
	ima.src='pic_bulboff.gif';
	testo.innerHTML=ima.src;
}
