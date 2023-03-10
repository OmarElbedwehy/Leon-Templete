
window.onload = ()=>{
  document.querySelector(".intro-text").style.top = "50%";
  document.querySelector(".intro-text").style.opacity = "1";
}

window.onscroll = ()=>{
  if (window.scrollY >= document.querySelector("#features").offsetTop-350){
    document.querySelectorAll(".feat").forEach((ele)=>{
      ele.classList.add("trans_feat");
    })
  }else{
    document.querySelectorAll(".feat").forEach((ele)=>{
      ele.classList.remove("trans_feat");
    })
  }
  if (window.scrollY >= document.querySelector("#services").offsetTop-350){
    document.querySelector(".services .container").classList.add("serv_active")
  }else{
    document.querySelector(".services .container").classList.remove("serv_active")
  }
  if (window.scrollY >= document.querySelector("#portfolio").offsetTop-350){
    document.querySelectorAll(".card").forEach((ele)=>{
      ele.classList.add("trans_card");
    })
  }else{
    document.querySelectorAll(".card").forEach((ele)=>{
      ele.classList.remove("trans_card");
    })
  }
  if (window.scrollY >= document.querySelector("#about").offsetTop-350){
    document.querySelector(".about .container").classList.add("trans_about");
  }else{
    document.querySelector(".about .container").classList.remove("trans_about");
  }
  if (window.scrollY >= document.querySelector("#contact").offsetTop-350){
    document.querySelector(".contact-content").style.transform = "translateX(0vw)";
  }else{
    document.querySelector(".contact-content").style.transform = "translateX(-80vw)";
  }
  if (window.scrollY >= document.querySelector("#features").offsetTop){
    document.querySelector(".trans_header").classList.add("trans_header_active");
    document.querySelector(".scroll_top").style.transform = "translateX(0vw)";
  }else{
    document.querySelector(".trans_header").classList.remove("trans_header_active");
    document.querySelector(".scroll_top").style.transform = "translateX(20vw)";
  }
}

document.querySelector("#toggle").addEventListener("click", (e)=>{
  document.querySelector("#toggle").classList.toggle("transform");
  document.querySelector("#nav-links").classList.toggle("active_nav")
})


document.querySelector(".scroll_top").addEventListener("click", ()=>{
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})
