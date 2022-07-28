const profileMenu = document.getElementById("profileMenu");
const profileContent = document.getElementById("profileContent");
const profileIcon = document.getElementById("profileIcon");
profileContent.style.color = "#fff";

const blogPusulam = document.getElementById("blogPusulam");
blogPusulam.style.fontFamily = "Dancing Script, cursive";
blogPusulam.style.fontSize = "25px";


profileMenu.addEventListener("mouseover", ()=> {
    profileMenu.style.backgroundColor = "#fff";
    profileContent.style.color = "#000";
})

profileMenu.addEventListener("mouseout", () => {
    profileMenu.style.backgroundColor = "#000";
    profileContent.style.color = "#fff";
})


//Social media hover effects
const twitter = document.getElementById("twitter");
twitter.addEventListener("mouseover", () => {
    twitter.style.fontSize = "55px";
    twitter.style.transition = "0.2s"
})

twitter.addEventListener("mouseout", () =>{
    twitter.style.fontSize = "50px";
})

const linkedin = document.getElementById("linkedin");
linkedin.addEventListener("mouseover", () => {
    linkedin.style.fontSize = "55px";
    linkedin.style.transition = "0.2s"
})

linkedin.addEventListener("mouseout", () => {
    linkedin.style.fontSize = "50px";
})

const github = document.getElementById("github");
github.addEventListener("mouseover", () => {
    github.style.fontSize = "55px";
    github.style.transition = "0.2s"
})

github.addEventListener("mouseout", () => {
    github.style.fontSize = "50px";
})