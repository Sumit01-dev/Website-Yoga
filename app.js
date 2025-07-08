//navbar scroll
window.addEventListener('scroll', function(){
    let navbar = document.querySelector('.navbar');
    if(this.window.scrollY > 20){
        navbar.classList.add('scrolled');
    }else{
      navbar.classList.remove('scrolled');
    }
})



//navbar toggle
const menuBtn = document.getElementById('menu_btn')
const navLinks = document.getElementById('nav_links')
const menuIcon = document.querySelector('i')

menuBtn.addEventListener('click' , (e)=>{
  navLinks.classList.toggle('open')

  const isOpen = navLinks.classList.contains('open')
  menuIcon.setAttribute('class', isOpen ? 'ri-close-line' : ri-menu-line)
})


// Animation
const scrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000
};

// Initialize ScrollReveal
const sr = ScrollReveal();

sr.reveal('.left h1', {
  ...scrollRevealOption,
  delay: 500,
});

sr.reveal('.left p', {
  ...scrollRevealOption,
  delay: 1000,
});

sr.reveal('.main_btn', {
  ...scrollRevealOption,
  delay: 1500,
});

sr.reveal('.right img', {
  ...scrollRevealOption,
  origin: 'right', // override origin for this one
});

sr.reveal('.top_heading', {
  ...scrollRevealOption,
  delay: 500,
});

sr.reveal('.heading', {
  ...scrollRevealOption,
  delay: 500,
});

sr.reveal('.para', {
  ...scrollRevealOption,
  delay: 500,
});

sr.reveal('.box', {
  ...scrollRevealOption,
  delay: 500,
});

sr.reveal('.right_box li', {
  ...scrollRevealOption,
  delay: 500,
});

sr.reveal('.box1 .boxes', {
  ...scrollRevealOption,
  delay: 500,
});

sr.reveal('.footer_col', {
  ...scrollRevealOption,
  delay: 500,
});