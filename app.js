
//boton hacia ariba 
const btn = document.querySelector('#btn');
const nav = document.querySelector('#nav');
btn.addEventListener('click',()=>{
  nav.scrollIntoView({block:'start', behavior:'smooth'})
})



//efecto scroll  cambio color menu 
const navbar = document.querySelector('.navbar');
document.addEventListener('scroll',()=>{
     if(window.scrollY > 100){
      navbar.classList.add('add');
     }else{
       navbar.classList.remove('add')
     }
})


//class active add menu
const navLink = document.querySelectorAll('.nav-link')

 navLink.forEach(element => {
  element.addEventListener('click',function(){
      navLink.forEach(link=>link.classList.remove('active'))
      element.classList.add('active')
  })
  
});


  
