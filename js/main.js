
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    
    document.getElementById("Navigation-Bar-Container").style.background = "#5558b7";
    document.getElementById("Navigation-Bar-Container").style.background = "rgba(254,254,254,.97)";
    document.getElementById("Navigation-Bar-Container").style.boxShadow = "0 0 1.25rem rgb(30 34 40 / 6%)";
    document.getElementById("wrap-navigation").style.height = "67px"
    document.getElementById("logo-text").style.color = "#363a41";
    document.getElementById("hamburger").style.color = "#363a41";
    let resume = document.getElementsByClassName("ResumeClass");
    for (let i = 0; i < resume.length; i++) {
      let element = resume[i];
      element.style.color="#363a41";
    }
    let collection = document.getElementsByClassName("scroll_to");
    for (let i = 0; i < collection.length; i++) {
      let element = collection[i];
      element.style.color="#363a41";
    }
    
  } else {
    
   
    document.getElementById("Navigation-Bar-Container").style.background = "none";
    document.getElementById("Navigation-Bar-Container").style.boxShadow = "none";
    document.getElementById("wrap-navigation").style.height = "90px"
    document.getElementById("logo-text").style.color = "#f8f9f9";
    document.getElementById("hamburger").style.color =  "#f8f9f9";
    let resume = document.getElementsByClassName("ResumeClass");
    for (let i = 0; i < resume.length; i++) {
      let element =resume[i];
      element.style.color="#f8f9f9";
    }
    let collection = document.getElementsByClassName("scroll_to")
    for (let i = 0; i < collection.length; i++) {
      let element = collection[i];
      element.style.color="#f8f9f9";
    }
    
  }
}



/*Scroll to section for navigation bar*/

const sections = document.getElementsByClassName("scroll_to");
for (var i = 0; i < sections.length; i++) {
  let element = sections[i];
  element.addEventListener("click", () => {
      const el = document.getElementById(element.getAttribute("data-link"));
      el.scrollIntoView({behavior:"smooth", block:"start"})
      let x = document.getElementById("myLinks");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "none";
      }
  })

}

/*Open Resume in new tab*/
const ProjectButton = document.getElementById("Go-to-Project");
function Project() {  
  const el = document.getElementById("Projects-Me");
  el.scrollIntoView({behavior:"smooth", block: "start"})
}

function Resume() {
  window.open('/Files/Andrew_Lin_Resume_13-04-2022-12-16-59.pdf', '_blank')
}

function Github() {
  window.open('https://github.com/ALin837', '_blank')
}


/*Go to Contact Section*/
const contactButton = document.getElementById("Go-to-Contact");
function Contact() {
  const el = document.getElementById("Contact-Me");
  el.scrollIntoView({behavior:"smooth", block: "start"})
}

/*Go to About Section*/
const downArrow = document.getElementById("bounce-arrow");
function About() {
  const el = document.getElementById("About-Me");
  el.scrollIntoView({behavior:"smooth", block: "start"})
}



/*Hamburger menu dropdown*/
function DisplayOptions() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
/*Close dropdown on window resize*/
window.onresize = () => {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "none";
  }
}


//Scroll bar highlighting
const sections_s = document.querySelectorAll('.top')
const navli = document.querySelectorAll('#NormalNavBar ul .nav-buttons a')
window.addEventListener("scroll", ()=> {
  let current = "";
  sections_s.forEach(section => {
    const sectionTop = section.offsetTop
    if (scrollY >= (sectionTop - 100)) {
      current = section.getAttribute('id');
    }
  })
  navli.forEach( li => {
    li.classList.remove('active')
    if (li.dataset['link'] == current) {
      li.classList.add('active')
    }
  })

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    const contact = document.getElementById("Contact-text-normal")
    const project = document.getElementById("projects-text-normal")
    project.classList.remove('active')
    contact.classList.add('active')
  }
  if (window.scrollY === 0)  {
    const home = document.getElementById("home-text-normal")
    home.classList.add('active')
  }
})


