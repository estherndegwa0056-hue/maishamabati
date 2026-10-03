document.addEventListener('DOMContentLoaded',()=>{
 const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();
 const form=document.getElementById('quote-form');
 if(form){form.addEventListener('submit',e=>{e.preventDefault();const name=document.getElementById('name').value.trim();const phone=document.getElementById('phone').value.trim();const msg=document.getElementById('message').value.trim();const text=`Hello Naisha Mabati Roofing, my name is ${name}. My phone number is ${phone}.\n\n${msg}`;window.open(`https://wa.me/254750005298?text=${encodeURIComponent(text)}`,'_blank','noopener');});}
 const slides=[
  {text:'“The service was straightforward, the product options were clearly explained and the team was responsive to my enquiry.”',name:'Brian K. — Nairobi'},
  {text:'“I received clear guidance on the roofing option I needed and the enquiry process was simple.”',name:'Mercy A. — Nakuru'},
  {text:'“The team helped me understand the available roofing products before I made my choice.”',name:'David O. — Kiambu'},
  {text:'“It was helpful to have roofing sheets, accessories and related products explained in one place.”',name:'Faith W. — Machakos'},
  {text:'“The product information made it easier to compare roofing options for my building project.”',name:'Peter M. — Kisumu'},
  {text:'“The response to my enquiry was clear and direct, which helped me plan my roofing requirements.”',name:'Ann N. — Mombasa'}
 ];
 let current=0,timer;
 const slider=document.querySelector('.testimonial-slider');
 const card=document.querySelector('.testimonial-card');
 const text=document.getElementById('testimonial-text');
 const name=document.getElementById('testimonial-name');
 const dots=[...document.querySelectorAll('.dot')];
 function render(direction='next'){
   if(!text||!name)return;
   card?.classList.remove('slide-in-left','slide-in-right');
   void card?.offsetWidth;
   card?.classList.add(direction==='next'?'slide-in-right':'slide-in-left');
   text.textContent=slides[current].text;
   name.textContent=slides[current].name;
   dots.forEach((d,i)=>{d.classList.toggle('active',i===current);d.setAttribute('aria-current',i===current?'true':'false')});
 }
 function nextSlide(){current=(current+1)%slides.length;render('next')}
 function prevSlide(){current=(current+slides.length-1)%slides.length;render('prev')}
 function restartTimer(){clearInterval(timer);timer=setInterval(nextSlide,4000)}
 document.querySelector('.prev')?.addEventListener('click',()=>{prevSlide();restartTimer()});
 document.querySelector('.next')?.addEventListener('click',()=>{nextSlide();restartTimer()});
 dots.forEach((d,i)=>d.addEventListener('click',()=>{const direction=i>=current?'next':'prev';current=i;render(direction);restartTimer()}));
 restartTimer();
 slider?.addEventListener('mouseenter',()=>clearInterval(timer));
 slider?.addEventListener('mouseleave',restartTimer);
 slider?.addEventListener('focusin',()=>clearInterval(timer));
 slider?.addEventListener('focusout',()=>{if(!slider.contains(document.activeElement))restartTimer()});
 // Reveal sections and product cards as they enter the viewport.
 const revealTargets=document.querySelectorAll('.section-heading,.about-copy,.about-gallery,.product-intro,.product-row,.contact-image,.contact-form-wrap,.contact-details .details-grid>div,.footer .container');
 revealTargets.forEach((el,i)=>{el.classList.add('reveal');if(i%4===1)el.classList.add('delay-1');if(i%4===2)el.classList.add('delay-2');if(i%4===3)el.classList.add('delay-3')});
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -40px'});
 revealTargets.forEach(el=>observer.observe(el));
 // Active section in the sticky navigation.
 const navLinks=[...document.querySelectorAll('.topbar nav a')];
 const sections=[...document.querySelectorAll('main section[id]')];
 const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`))}}),{rootMargin:'-30% 0px -60% 0px',threshold:0});
 sections.forEach(section=>sectionObserver.observe(section));
 // Back to top control.
 const topBtn=document.querySelector('.back-to-top');
 const updateTop=()=>topBtn?.classList.toggle('visible',window.scrollY>650);
 window.addEventListener('scroll',updateTop,{passive:true});updateTop();
 topBtn?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
 // Keyboard/touch friendliness for the floating actions.
 document.querySelectorAll('.float-btn').forEach(btn=>btn.addEventListener('touchstart',()=>{}, {passive:true}));
});
