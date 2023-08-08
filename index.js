var colorSelectRed = document.getElementById('red');
var colorSelectBlack = document.getElementById('black');
var colorSelectBlue = document.getElementById('blue');
var colorSelectPink = document.getElementById('pink');
var colorSelectPurple = document.getElementById('purple');
var imgColor = document.getElementById('images');


colorSelectRed.addEventListener( 'click' , function(){
    imgColor.src = 'http://127.0.0.1:5500/red.png'
});

colorSelectBlack.addEventListener( 'click' , function(){
    imgColor.src = 'http://127.0.0.1:5500/black.png'
});

colorSelectBlue.addEventListener( 'click' , function(){
    alert('Color Not Available');
});

colorSelectPink.addEventListener( 'click' , function(){
    imgColor.src = 'http://127.0.0.1:5500/pink.png'
});

colorSelectPurple.addEventListener( 'click' , function(){
    imgColor.src = 'http://127.0.0.1:5500/purple.png'
});