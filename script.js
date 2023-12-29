var items = ['😺','😸','😹','😻','😼','😽','🙀','😿','😾']
const PLAY= document.getElementById('play');
const ojo1=document.getElementById('ojo1');
const ojo2=document.getElementById('ojo2');
const BOCA = document.getElementById('boca');
const LENGUA = document.getElementById('lengua');
const GANO = document.getElementById('ganaste');
const GATO = document.getElementById('gato');
const VIDEO = document.getElementById('gatobailando');



PLAY.addEventListener('click',play);



function play(){
    let irandom1 = items[Math.floor(Math.random() * items.length)];
let irandom2 = items[Math.floor(Math.random() * items.length)];

    

    ojo1.innerHTML=irandom1;
    ojo2.innerHTML=irandom2;

    console.log(irandom1)
    console.log(irandom2)    

    if (irandom1==irandom2){
        GANO.style.display='block';
        LENGUA.style.display='block';
        ; PLAY.disabled=true;
        GATO.style.scale='0.6';
        GATO.style.translate='0 -20';
        VIDEO.play();
        VIDEO.style.display='block';
    }

    
}
