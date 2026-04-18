

const menuBtn=document.getElementById("menuBtn")
const mobileMenu=document.getElementById("mobileMenu")
menuBtn.onclick=()=>mobileMenu.classList.toggle("hidden")

const elements=document.querySelectorAll(".fade")
const observer=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show")
}
})
})
elements.forEach(el=>observer.observe(el))

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault()
document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})
})
})

