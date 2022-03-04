// "n" es el valor que recibe al presionar los botones, el valor o es "1" o es "-1"
// "i" es el contador.
// "_SlideActual" es la imagen que se debera presentar en dicho momento.

var slideIndex = 1; 
showDivs(slideIndex); 

function plusDivs(n) {
  showDivs(slideIndex += n); 
}

function showDivs(n) {
  var i;
  var _SlideActual = document.getElementsByClassName("mySlides");
  if (n > _SlideActual.length) {slideIndex = 1}
  if (n < 1) {slideIndex = _SlideActual.length}
  for (i = 0; i < _SlideActual.length; i++) {
    _SlideActual[i].style.display = "none";  
  }
  _SlideActual[slideIndex-1].style.display = "block";  
}
