console.log('Loaded!');

//change the text of the main-text div

var element=document.getElementById('main-text');


element.innerHTML='New Value';

//move the image
var image = document.getElementById('madi');
var marginLeft=0;
function moveRight () {
    marginLeft = marginLeft + 1;
    image.style.marginLeft=marginLeft+'px';
}

image.onclick = function () {
    var interval=setInterval(moveRight,50);
};
