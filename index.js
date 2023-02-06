const menu = document.getElementById("menu");
const windows = document.getElementById("window");
const img = document.getElementById("img");
const container= document.getElementById("container");
const main = document.getElementById("main");

menu.addEventListener("click",()=>{
      windows.style.display="block";
      container.style.opacity="0.4";
      
})
img.addEventListener("click",()=>{
      windows.style.display="none";
      container.style.opacity="1";
})

