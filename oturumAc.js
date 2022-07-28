const blogPusulam = document.getElementById("blogPusulam");
blogPusulam.style.fontFamily = "Dancing Script, cursive";
blogPusulam.style.fontSize = "25px";


const RegisterMenu = document.getElementById("Register-Menu");
const RegisterMenuContent = document.getElementById("Register-Menu-Content");
RegisterMenuContent.style.color = "#fff";

RegisterMenu.addEventListener("mouseover", ()=> {
    RegisterMenu.style.backgroundColor = "#fff";
    RegisterMenuContent.style.color = "#000";
})

RegisterMenu.addEventListener("mouseout", () => {
    RegisterMenu.style.backgroundColor = "#000";
    RegisterMenuContent.style.color = "#fff";
})

const loginContainer = document.getElementById("login-container");
loginContainer.style.width = "400px";
loginContainer.style.height = "480px";
loginContainer.style.border = "2px solid #000";
loginContainer.style.borderRadius = "15px";
loginContainer.style.backgroundColor = "#b4bfbf";
loginContainer.style.opacity = "0.5";


const accountQuery = document.getElementById("account-query");
accountQuery.style.textDecoration = "none";
accountQuery.style.color = "red";
accountQuery.style.marginTop = "10px"

//Social media Hover effects
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