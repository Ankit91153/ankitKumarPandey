// media query navbar

let header=document.querySelector(".header");
let mobilebtn=document.querySelector(".mobile-btn");

mobilebtn.addEventListener("click",()=>{
  header.classList.toggle("active");
})

// Slider Code
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Scroll bar  Smoothly
  const heroSection=document.querySelector('.section-hero');
  const homeSection = document.querySelector('.home-link');
  const HeroScroll=()=>{
    heroSection.scrollIntoView({behavior:"smooth"});
  }
  homeSection.addEventListener("click",HeroScroll);


  const biodataSection=document.querySelector('.section-biodata');
  const aboutSection = document.querySelector('.about-link');
  const biodataScroll=()=>{
    biodataSection.scrollIntoView({behavior:"smooth"});
  }
  aboutSection.addEventListener("click",biodataScroll);


  const projectSection=document.querySelector('#project');
  const projectLink=document.querySelector('.project-link');
  const projectScroll=()=>{
  projectSection.scrollIntoView({behavior:"smooth"});
}
  projectLink.addEventListener("click",projectScroll);



  const hiremeSection=document.querySelector('.section-hireMe');
  const hireSection = document.querySelector('.hire-link');
  const hiremeScroll=()=>{
    hiremeSection.scrollIntoView({behavior:"smooth"});
  }
  hireSection.addEventListener("click",hiremeScroll);


  const contactSection=document.querySelector('.section-contact');
  const contactmeSection = document.querySelector('.contact-link');
  const conatctScroll=()=>{
    contactSection.scrollIntoView({behavior:"smooth"});
  }
  contactmeSection.addEventListener("click",conatctScroll);


  // Clear form data
  function submitForm(){
    // document.contactform.submit();
    var frm=document.getElementsByName('contactform')[0];
    frm.submit();
    frm.reset();
    // document.contactform.reset();
    return false;
  }

  // Sticky Navabr

  const observer =new IntersectionObserver(
    (entries)=>{
      const ent=entries[0];
      !ent.isIntersecting?document.body.classList.add("sticky"):
      document.body.classList.remove("sticky");},
      {
        root:null,
        threshold:0,
      }
    );
  observer.observe(heroSection);