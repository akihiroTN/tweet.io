'use strict'
let bkb=document.getElementById('bkb');
let title=document.getElementById("title");
let valm=document.getElementById("tweet-form");
var audi=new Audio("se_maoudamashii_system35.mp3");
function onc(){
    let val=valm.value;
    if(val.length>20){
        alert('20文字以上はツイートできません。');
        return;
        audi.currentTime=5;
    }
    else if(val.length===0){
        alert('文字を入力してください。');
        return;
        audi.currentTime=5;
    }
    let main=document.createElement('p');
    main.className='tweet';
    bkb.appendChild(main);
    main.innerText=val;
    audi.currentTime=0;
    audi.play();


}

let deg=0;
function titl(){
    deg+=6;
    title.style.transform="rotateX("+deg+"deg)";

}
setInterval(titl,20);