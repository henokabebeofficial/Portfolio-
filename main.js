let icon = document.querySelector("#icon");
let app_icons = document.querySelectorAll(".social img");

let contact_input = document.querySelectorAll("#contact input");
let links = document.querySelectorAll("a");
let hero = document.querySelector(".hero");
let header = document.querySelector(".header");
let body = document.querySelector("body");
let nav = document.querySelector("nav");
let btn = document.querySelector(".contact_btn");
let menu_icon = document.querySelector(".menu_icon");
let menu = document.querySelector("#menu");
let about = document.querySelector(".about");

let box  = document.querySelectorAll(".box");


let lists = document.querySelectorAll("#menu ul li");

let close = document.querySelector(".close");
let light = true ;


let service = document.querySelector("#service");
let contact = document.querySelector("#contact");
let footer = document.querySelector("#footer");
let project = document.querySelectorAll(".project");
let services = document.querySelectorAll(".service");

let extra = document.querySelector("#project");
let textarea = document.querySelector("#contact textarea");

let text = document.querySelectorAll(".project .text");


icon.addEventListener("click",()=>{
  if(icon.innerHTML == "🌑"){
    icon.innerHTML = "🌕";
    contact_input.forEach((input)=>{
     input.style.background = "transparent";
      input.style.border = "1px solid #fff";
    })
    textarea.style.background = "transparent";
    textarea.style.border = "1px solid #fff";
    
    text.forEach((item) => {
      item.style.color = "#111";
    });
    
    app_icons.forEach((app_icon) => {
      app_icon.style.border = "1px solid #fff";
    });
    hero.style.background = "#121212";
    header.style.background = "#111";
    about.style.background = "#111";
    body.style.color = "#fff";
    nav.style.background = "#121212";
    nav.style.border = "1px solid #fff";
    btn.style.background = "#121212";
    btn.style.border = "1px solid #fff";
   btn.style.color = "#fff";
   box.forEach((boxs)=>{
   boxs.style.border = "2px solid #fff";
   })
   links.forEach((link) => {
      link.style.color = "#fff";
   })
   
   light = false;
     
  service.style.background = "#121212";
   extra.style.background = "#121212";
  contact.style.background = "#121212";
  footer.style.background = "#121212";
  services.forEach((each)=>{
  each.style.border = "1px solid #fff";
  })
 service.style.color = "#fff";
 contact.style.color = "#fff";
 footer.style.color = "#fff";
 extra.style.color = "#fff";

   
  }else{
    textarea.style.background = "transparent";
    textarea.style.border = "1px solid #111";
    
    contact_input.forEach((input) => {
      input.style.background = "transparent";
           input.style.border = "1px solid #111";
    })
    
    icon.innerHTML = "🌑";
    app_icons.forEach((app_icon) => {
      app_icon.style.border = "1px solid #111";
    });
   body.style.background = "#fff";
   hero.style.background = "#f2f2f2";
   header.style.background = "#f2f2f2";
   body.style.color = "#111";
   nav.style.background = "#fff";
   btn.style.background = "#f2f2f2";
   btn.style.border = "1px solid #111";
   btn.style.color = "#111";
   nav.style.border = "none";
   about.style.background = "#f2f2f2";
   box.forEach((boxs) => {
   boxs.style.border = "2px solid #111";
   })
  links.forEach((link) => {
        link.style.color = "#111";
      })
   light = true;
   service.style.background = "#fff";
   extra.style.background = "#fff";
   contact.style.background = "#fff";
   footer.style.background = "#fff";
   services.forEach((each) => {
     each.style.border = "1px solid #111";
   })
   service.style.color = "#111";
   contact.style.color = "#111";
   footer.style.color = "#111";
   extra.style.color = "#111";
  }
})

menu_icon.addEventListener("click",()=>{
  menu.style.display = "block";
  
})

close.addEventListener("click", () => {
  
    menu.style.display = "none";
  
})
lists.forEach((list)=>{
  list.addEventListener("click", () => {
    menu.style.display = "none";
  })
})



window.onscroll = ()=>{
  if(window.scrollY > 30){
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.left = "-17em";
    nav.style.width = "150%";
    nav.backgroundFilter = "blur(5em)";
  }else{
        nav.style.position = "relative";
        nav.style.top = "0";
        nav.style.left = "0";
        nav.style.width = "25em";
  }
}



box.forEach((boxs) => {
  boxs.addEventListener('touchstart', function toggle() {
      console.log(light);
if(light){
  boxs.classList.add("hoverd");
  setTimeout(() => {
    boxs.classList.remove("hoverd");
  }, 500)
}else{
  boxs.classList.add("hover");
  setTimeout(() => {
    boxs.classList.remove("hover");
  }, 500)
}
    
  });
})
  
  
  

 const observer = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
     if (entry.isIntersecting) {
       entry.target.classList.add('show');
       // Optionally stop observing after it becomes visible
     observer.unobserve(entry.target);
     }
   });
 }, {
   threshold: 0.1 // trigger when 10% is visible
 });
 
 box.forEach(boxs => {
   observer.observe(boxs);
 });
 
 observer.observe(hero);
 
 let body_img = document.querySelector(".body img");
 let body_p = document.querySelector(".body p");
 let body_h = document.querySelector(".body h1");
 let body_button = document.querySelector(".body .buttons");

 observer.observe(body_img);
 observer.observe(body_p);
 observer.observe(body_h);
 observer.observe(body_button);



let about_header = document.querySelector(".about .about_header");

 observer.observe(about_header);

app_icons.forEach(icons => {
   observer.observe(icons);
 });
 