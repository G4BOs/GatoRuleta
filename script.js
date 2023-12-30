const TIRAR = document.getElementById('tirar');
const pop = new Audio('sound/pop2.wav');
const win = new Audio('sound/victoria.mp3');
const gameover= new Audio('sound/gameover.wav')
var emogis = ['😼','😾','😿','🙀','😽','😻','😹','😸','😺'];
let vueltas = 10;
const C1= document.getElementById('casilla1');
const C2= document.getElementById('casilla2');
const C3= document.getElementById('casilla3');
const SUMAR = document.getElementById('sumar');
SUMAR.disabled=true;
let vidas = 9;
const VREST= document.getElementById('vidasrestantes');
const GATO =document.getElementById('gato');
const REINTENTAR = document.getElementById('reintentar');
REINTENTAR.disabled=true;


REINTENTAR.addEventListener('click',()=>{location.reload()})




TIRAR.addEventListener('click',jugar)

function jugar(){
    

    vidas = vidas-1;
    

    //Game Over
    if(vidas<=0){TIRAR.disabled=true;gameover.play();
    VREST.style.color='red';
        GATO.style.backgroundColor='rgba(255,0,0,0.2)';
        SUMAR.disabled=true;
        REINTENTAR.disabled=false;
    }
    pop.play();

let combinacion=[];

for(let i=0;i<3;i++){
    combinacion.push(emogis[Math.floor(Math.random()*emogis.length)])}

    if(combinacion[0]==combinacion[1]||combinacion[0]==combinacion[2]||combinacion[1]==combinacion[2]){
        SUMAR.disabled= false;}else {SUMAR.disabled=true;} 

C1.textContent=combinacion[0]
C2.textContent=combinacion[1]
C3.textContent=combinacion[2]



if(combinacion[0]==combinacion[1]&&combinacion[0]==combinacion[2]){
    TIRAR.disabled=true;SUMAR.disabled=true;
win.play();
GATO.style.backgroundColor='rgba(0,255,0,0.2)';
REINTENTAR.disabled=false;


}
VREST.textContent="VIDAS: "+vidas;

}
SUMAR.addEventListener('click',()=>{vidas = vidas+1;VREST.textContent="VIDAS: "+vidas;SUMAR.disabled=true;})