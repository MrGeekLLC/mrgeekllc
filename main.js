// Cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{
  mx=e.clientX;my=e.clientY;
  cursor.style.left=mx-6+'px';cursor.style.top=my-6+'px';
});
function animateRing(){
  rx+=(mx-rx-18)*0.12;ry+=(my-ry-18)*0.12;
  ring.style.left=rx+'px';ring.style.top=ry+'px';
  requestAnimationFrame(animateRing);
}
animateRing();
document.querySelectorAll('a,button,.card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.transform='scale(2)';ring.style.transform='scale(1.5)';ring.style.opacity='0.8';});
  el.addEventListener('mouseleave',()=>{cursor.style.transform='scale(1)';ring.style.transform='scale(1)';ring.style.opacity='0.5';});
});

// Scroll reveal
const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{
  entries.forEach((entry,i)=>{
    if(entry.isIntersecting) setTimeout(()=>entry.target.classList.add('visible'),i*80);
  });
},{threshold:0.1});
reveals.forEach(el=>observer.observe(el));

// Active nav link
document.querySelectorAll('.nav-links a').forEach(a=>{
  if(a.href===window.location.href) a.classList.add('active');
});
