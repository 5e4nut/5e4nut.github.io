let buttons = document.querySelectorAll('.button');
let yes = document.querySelector('.yes');
let deal = document.querySelector('.deal');
let ded = document.querySelector('.ded');
let no = document.querySelector('.no');
let back = document.querySelector('.back');
let content = document.querySelector('.content');
let counter = 0;

buttons[0].addEventListener('click', function(){
    ded.style = "visibility: hidden";
    no.style = "visibility: hidden";
    yes.style = "visibility: visible; opacity: 2; transition: 2s; overflow: visible";
    deal.style = "visibility: hidden; opacity: 0";
    back.style = "visibility: visible; opacity: 2; transition: 2s";
})

buttons[1].addEventListener('click', function(){
    no.style = "visibility: hidden";
    yes.style = "visibility: hidden";
    ded.style = "visibility: visible; opacity: 2; transition: 2s; overflow: visible";
    deal.style = "visibility: hidden; opacity: 0";
    back.style = "visibility: visible; opacity: 2; transition: 2s; margin-top: 30px;";
})

buttons[2].addEventListener('click', function(){
    counter++;
    if (counter == 5){
    ded.style = "visibility: hidden";
    yes.style = "visibility: hidden";
    no.style = "visibility: visible; opacity: 2; transition: 2s; overflow: visible";
    deal.style = "visibility: hidden; opacity: 0";
    back.style = "visibility: visible; opacity: 2; transition: 2s; margin-top: 100px";
    content.style = "margin-left: 240px"
}
})

back.addEventListener('click', function(){
    counter=0;
    ded.style = "visibility: hidden";
    yes.style = "visibility: hidden";
    no.style = "visibility: hidden";
    deal.style = "visibility: visible; opacity: 2; transition: 2s;";
    back.style = "visibility: hidden";
    content.style = "margin-left: 390px"
})

