const TIRAR = document.getElementById('tirar');
const pop = new Audio('sound/pop2.wav');
const win = new Audio('sound/victoria.mp3');
var emogis = ['😼','😾','😿','🙀','😽','😻','😹','😸','😺'];
let vueltas = 10;
const C1= document.getElementById('casilla1');
const C2= document.getElementById('casilla2');
const C3= document.getElementById('casilla3');






TIRAR.addEventListener('click',jugar)

function jugar(){
    pop.play();

let combinacion=[];

for(let i=0;i<3;i++){
    combinacion.push(emogis[Math.floor(Math.random()*emogis.length)])}

C1.textContent=combinacion[0]
C2.textContent=combinacion[1]
C3.textContent=combinacion[2]

if(combinacion[0]==combinacion[1]&&combinacion[0]==combinacion[2]){
    TIRAR.disabled=true;
win.play();
}





}