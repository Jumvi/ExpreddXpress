const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const supprimer = document.querySelector('#supprimer');
const slide = document.querySelector('#slide');
const slidCont = document.querySelector('#slidCont');
const slidDebout = document.querySelector('#slidDebout');



hamburger.addEventListener('click', () => {
    
    menu.classList.replace('hidden', 'block');
    hamburger.classList.replace('block','hidden');
    supprimer.classList.replace('hidden','block');
});

supprimer.addEventListener('click',()=>{
    menu.classList.replace('block','hidden');
    hamburger.classList.replace('hidden','block');
    supprimer.classList.replace('block','hidden')
})

slide.addEventListener('click', ()=>{
    slidCont.classList.replace('hidden', 'block');
    slidDebout.classList.replace('hidden','block');
    slide.classList.add('hidden');
})

slidDebout.addEventListener('click', ()=>{
    slidCont.classList.replace('block', 'hidden');
    
    slidDebout.classList.replace('block','hidden');
    slide.classList.replace('hidden', 'block')
})
const contenair = document.querySelector('#container');
const gauche = document.getElementById('gauche');
const droite = document.getElementById('droite');
var nb = 4;

//document.body.onload
    const body = document.querySelector('body');

    window.addEventListener('load',function(){
   
        for(i=1;i<nb+1;i++){
            const div = document.createElement('div');
            div.className ='photo';
            contenair.style.width = (70*nb)+"rem"
    
            
            div.style.backgroundImage = "url('./photos/experience"+i+".jpeg')";
            contenair.appendChild(div);
    
        }
    
    
    })



var p = 0;

gauche.addEventListener('click',()=>{
    if(p>-nb+1){
        p--;
        contenair.style.transform = "translate("+p*70+"rem)";
        contenair.style.transition = "all 0.5s ease";
        
    }
    afficheMasque()
    
})

droite.addEventListener('click',()=>{
    if(p<0){
        p++;
        contenair.style.transform = "translate("+p*70+"rem)";
        contenair.style.transition = "all 0.5s ease";
        
    }

    afficheMasque()
    
})


function afficheMasque(){
    if(p == -nb+1){
        gauche.style.visibility = 'hidden';
    }else{
        gauche.style.visibility = 'visible';
    }
    
    if(p == 0){
        droite.style.visibility = 'hidden';
    }else{
        droite.style.visibility = 'visible';
    }

}


