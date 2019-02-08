const sky = document.getElementsByClassName('sky')[0];
const title = document.getElementsByClassName('title')[0];
const mars = document.getElementsByClassName('mars')[0];
const rocket = document.getElementsByClassName('rocket')[0];

window.document.addEventListener('mousemove', (e) => {
  sky.style.backgroundPositionX = ((e.clientX - window.innerWidth/2)/50)  + 'px';
  sky.style.backgroundPositionY = ((e.clientY - window.innerHeight/2)/50) + 'px';
  title.style.left = ((e.clientX - window.innerWidth/2)/15)  + 'px';
  title.style.top = ((e.clientY - window.innerHeight/2)/15) + 'px';
  // console.log((e.offsetX) + 'and' + (e.offsetY));
});

window.document.addEventListener('scroll', (e) => {
  console.log(window.pageYOffset);
  mars.style.marginTop = -window.pageYOffset/4 + 'px';
  rocket.style.marginTop = -window.pageYOffset*1.5 + 'px';
})
