// SCROLL REVEAL
const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>{
  entries.forEach((entry,i)=>{
    if(entry.isIntersecting) setTimeout(()=>entry.target.classList.add('visible'),i*80);
  });
},{threshold:0.08});
reveals.forEach(el=>observer.observe(el));

// ACTIVE NAV
document.querySelectorAll('.nav-links a').forEach(a=>{
  if(window.location.pathname.endsWith(a.getAttribute('href'))) a.classList.add('active');
});

// MOBILE MENU
const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu');
if(hamburger&&mobileMenu){
  hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow=mobileMenu.classList.contains('open')?'hidden':'';
  });
  mobileMenu.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click',()=>{
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow='';
    });
  });
}

// COOKIE BAR
const cookieBar=document.getElementById('cookieBar');
if(cookieBar){
  if(!localStorage.getItem('mg_cookie_consent')){
    cookieBar.style.display='flex';
  }
  document.getElementById('cookieAccept')?.addEventListener('click',()=>{
    localStorage.setItem('mg_cookie_consent','accepted');
    cookieBar.style.display='none';
  });
  document.getElementById('cookieDecline')?.addEventListener('click',()=>{
    localStorage.setItem('mg_cookie_consent','declined');
    cookieBar.style.display='none';
  });
}

// NAV SCROLL EFFECT
window.addEventListener('scroll',()=>{
  const nav=document.querySelector('nav');
  if(nav) nav.style.borderBottomColor=window.scrollY>50?'rgba(0,255,136,0.15)':'var(--border)';
});
