var currentLeft = 0;
var slider = document.getElementById('slider');
var minLeft = -300;
var maxLeft = 0;
function nextSlide() {
  if (currentLeft > minLeft){
    currentLeft=currentLeft -100;
    slider.style.left = currentLeft + '%';
  }
}


function prevSlide() {
  console.log('prev');
 if (currentLeft < maxLeft){
    currentLeft=currentLeft +100;
    slider.style.left = currentLeft + '%';
  }
}
document.getElementById('next').onclick = nextSlide;
document.getElementById('prev').onclick = prevSlide;