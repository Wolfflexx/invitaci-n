const yesbt =document.querySelector('#yesbt');

yesbt.addEventListener('click', function() {
    alert('Sabia que aceptarias y por eso te amo UWU')
});

const nobt =document.querySelector('#nobt');

nobt.addEventListener('mouseover',function() {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    nobt.style.setProperty('top', randomY+'%');
    nobt.style.setProperty('left', randomX+'%');
    nobt.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`)
})