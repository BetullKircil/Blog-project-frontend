const firstHeader = document.getElementById("firstHeader");
firstHeader.style.fontFamily = 'Dancing Script, cursive';
firstHeader.style.marginTop = "220px";
firstHeader.style.fontSize = "50px";
firstHeader.style.fontWeight = "300";
firstHeader.style.color = "#521121";
firstHeader.style.marginRight = "220px";

const firstParagraph = document.getElementById("firstParagraph");
firstParagraph.style.fontFamily = "Dancing Script, cursive";
firstParagraph.style.fontSize = "25px";
firstParagraph.style.fontWeight = "200";
firstParagraph.style.color = "#521121";
firstParagraph.style.marginRight = "220px";

firstHeader.addEventListener("mouseover", () => {
    firstHeader.style.cursor = "text";
})

firstParagraph.addEventListener("mouseover", () => {
    firstParagraph.style.cursor = "text";
})

const profileMenu = document.getElementById("profileMenu");
const profileContent = document.getElementById("profileContent");
const profileIcon = document.getElementById("profileIcon");
profileMenu.addEventListener("mouseover", ()=> {
    profileMenu.style.backgroundColor = "#fff";
    profileContent.style.color = "#000";
})

profileMenu.addEventListener("mouseout", () => {
    profileMenu.style.backgroundColor = "#000";
    profileContent.style.color = "#fff";
})

const blogPusulam = document.getElementById("blogPusulam");
blogPusulam.style.fontFamily = "Dancing Script, cursive";
blogPusulam.style.fontSize = "25px";


//Clinkable texts in cards
function İlkBlogTikla(){
    firstBlogContent.style.color = "#ab0a1a";
    firstBlogHeader.style.color = "#ab0a1a";
}

function İkinciBlogTikla(){
    secondBlogContent.style.color = "#ab0a1a";
    secondBlogHeader.style.color = "#ab0a1a";
}


function ÜcüncüBlogTikla(){
    thirdBlogContent.style.color = "#ab0a1a";
    thirdBlogHeader.style.color = "#ab0a1a";
}

function DördüncüBlogTikla(){
    fourthBlogContent.style.color = "#ab0a1a";
    fourthBlogHeader.style.color = "#ab0a1a";
}
/******************** */


const firstBlogHeader = document.getElementById("first-blog-header");
firstBlogHeader.style.fontSize = "35px";
firstBlogHeader.style.userSelect = "none";
const firstBlogContent = document.getElementById("first-blog-content");
firstBlogContent.style.fontSize = "18px";
firstBlogContent.style.userSelect = "none";

firstBlogHeader, firstBlogContent.addEventListener("mouseover", () => {
    firstBlogContent.style.fontSize = "20px";
    firstBlogHeader.style.fontSize = "40px";
    firstBlogContent.style.transition = "0.3s";
    firstBlogHeader.style.transition = "0.3s";
    firstBlogContent.style.color = "#1a0d91";
    firstBlogHeader.style.color = "#1a0d91";
    firstBlogHeader.style.cursor = "pointer";
    firstBlogContent.style.cursor = "pointer";
})
firstBlogHeader, firstBlogContent.addEventListener("mouseout", () =>{
    firstBlogContent.style.fontSize = "18px";
    firstBlogHeader.style.fontSize = "35px";
    firstBlogContent.style.color = "#000";
    firstBlogHeader.style.color = "#000";
})


const secondBlogHeader = document.getElementById("second-blog-header");
secondBlogHeader.style.fontSize = "35px";
secondBlogHeader.style.userSelect = "none";
const secondBlogContent = document.getElementById("second-blog-content");
secondBlogContent.style.fontSize = "18px";
secondBlogContent.style.userSelect = "none";

secondBlogHeader,secondBlogContent.addEventListener("mouseover", () => {
    secondBlogContent.style.fontSize = "20px";
    secondBlogHeader.style.fontSize = "40px";
    secondBlogContent.style.transition = "0.3s";
    secondBlogHeader.style.transition = "0.3s";
    secondBlogContent.style.color = "#1a0d91";
    secondBlogHeader.style.color = "#1a0d91";
    secondBlogHeader.style.cursor = "pointer";
    secondBlogContent.style.cursor = "pointer";
})
secondBlogHeader, secondBlogContent.addEventListener("mouseout", () =>{
    secondBlogContent.style.fontSize = "18px";
    secondBlogHeader.style.fontSize = "35px";
    secondBlogContent.style.color = "#000";
    secondBlogHeader.style.color = "#000";
})


const thirdBlogHeader = document.getElementById("third-blog-header");
thirdBlogHeader.style.fontSize = "35px";
thirdBlogHeader.style.userSelect = "none";
const thirdBlogContent = document.getElementById("third-blog-content");
thirdBlogContent.style.fontSize = "18px";
thirdBlogContent.style.userSelect = "none";

thirdBlogHeader,thirdBlogContent.addEventListener("mouseover", () => {
    thirdBlogContent.style.fontSize = "20px";
    thirdBlogHeader.style.fontSize = "40px";
    thirdBlogContent.style.transition = "0.3s";
    thirdBlogHeader.style.transition = "0.3s";
    thirdBlogContent.style.color = "#1a0d91";
    thirdBlogHeader.style.color = "#1a0d91";
    thirdBlogHeader.style.cursor = "pointer";
    thirdBlogContent.style.cursor = "pointer";
})
thirdBlogHeader, thirdBlogContent.addEventListener("mouseout", () =>{
    thirdBlogContent.style.fontSize = "18px";
    thirdBlogHeader.style.fontSize = "35px";
    thirdBlogContent.style.color = "#000";
    thirdBlogHeader.style.color = "#000";
})


const fourthBlogHeader = document.getElementById("fourth-blog-header");
fourthBlogHeader.style.fontSize = "35px";
fourthBlogHeader.style.userSelect = "none";
const fourthBlogContent = document.getElementById("fourth-blog-content");
fourthBlogContent.style.fontSize = "18px";
fourthBlogContent.style.userSelect = "none";

fourthBlogHeader,fourthBlogContent.addEventListener("mouseover", () => {
    fourthBlogContent.style.fontSize = "20px";
    fourthBlogHeader.style.fontSize = "40px";
    fourthBlogContent.style.transition = "0.3s";
    fourthBlogHeader.style.transition = "0.3s";
    fourthBlogContent.style.color = "#1a0d91";
    fourthBlogHeader.style.color = "#1a0d91";
    fourthBlogHeader.style.cursor = "pointer";
    fourthBlogContent.style.cursor = "pointer";
})
fourthBlogHeader, fourthBlogContent.addEventListener("mouseout", () =>{
    fourthBlogContent.style.fontSize = "18px";
    fourthBlogHeader.style.fontSize = "35px";
    fourthBlogContent.style.color = "#000";
    fourthBlogHeader.style.color = "#000";
})


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
