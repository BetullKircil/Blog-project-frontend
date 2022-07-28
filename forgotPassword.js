const blogPusulam = document.getElementById("blogPusulam");
blogPusulam.style.fontFamily = "Dancing Script, cursive";
blogPusulam.style.fontSize = "25px";


const registerMenuContent = document.getElementById("register-Menu-Content");
registerMenuContent.style.color = "#fff";

const registerMenu = document.getElementById("register-Menu");
registerMenu.addEventListener("mouseover", ()=> {
    registerMenu.style.backgroundColor = "#fff";
    registerMenuContent.style.color = "#000";
})

registerMenu.addEventListener("mouseout", () => {
    registerMenu.style.backgroundColor = "#000";
    registerMenuContent.style.color = "#fff";
})

const loginContainer = document.getElementById("login-container");
loginContainer.style.width = "400px";
loginContainer.style.height = "480px";
loginContainer.style.border = "2px solid #000";
loginContainer.style.borderRadius = "15px";
loginContainer.style.backgroundColor = "#b4bfbf";
loginContainer.style.opacity = "0.5";


//Social media hover effect
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