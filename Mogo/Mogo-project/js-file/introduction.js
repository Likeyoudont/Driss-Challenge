// Add your introduction logic here.
function sliders() {
let intro=document.getElementById('intro-button01');
let introslide01=document.querySelector('.introduction-slide01');
if(intro) {
    intro.addEventListener('click', function() {
        alert('this is the introduction you want !');
    });
}
let intro2=document.getElementById('intro-button02');
let introslide02=document.querySelector('.introduction-slide02');
if(intro2) {
    intro2.addEventListener('click', function() {
        document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
       
    });
}
let intro3=document.getElementById('intro-button03');
let introslide03=document.querySelector('.introduction-slide03');
if(intro3) {
    intro3.addEventListener('click', function() {
        document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
    });
}
let intro4=document.getElementById('intro-button04');
let introslide04=document.querySelector('.introduction-slide04');
if(intro4) {
    intro4.addEventListener('click', function() {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
}
}
sliders();