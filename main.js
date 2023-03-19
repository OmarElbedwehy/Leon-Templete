
window.onload = () => {
  document.querySelector(".intro-text").style.top = "50%";
  document.querySelector(".intro-text").style.opacity = "1";
}

let scroll_animation = ()=>{
  if (window.scrollY >= document.querySelector("#features").offsetTop - 350) {
    document.querySelectorAll(".feat").forEach((ele) => {
      ele.classList.add("trans_feat");
    })
  } else {
    document.querySelectorAll(".feat").forEach((ele) => {
      ele.classList.remove("trans_feat");
    })
  }
  if (window.scrollY >= document.querySelector("#services").offsetTop - 350) {
    document.querySelector(".services .container").classList.add("serv_active")
  } else {
    document.querySelector(".services .container").classList.remove("serv_active")
  }
  if (window.scrollY >= document.querySelector("#portfolio").offsetTop - 350) {
    document.querySelectorAll(".card").forEach((ele) => {
      ele.classList.add("trans_card");
    })
  } else {
    document.querySelectorAll(".card").forEach((ele) => {
      ele.classList.remove("trans_card");
    })
  }
  if (window.scrollY >= document.querySelector("#about").offsetTop - 350) {
    document.querySelector(".about .container").classList.add("trans_about");
  } else {
    document.querySelector(".about .container").classList.remove("trans_about");
  }
  if (window.scrollY >= document.querySelector("#contact").offsetTop - 350) {
    document.querySelector(".contact-content").style.transform = "translateX(0vw)";
  } else {
    document.querySelector(".contact-content").style.transform = "translateX(-80vw)";
  }
  if (window.scrollY >= document.querySelector("#features").offsetTop) {
    document.querySelector(".trans_header").classList.add("trans_header_active");
    document.querySelector(".scroll_top").style.transform = "translateX(0vw)";
  } else {
    document.querySelector(".trans_header").classList.remove("trans_header_active");
    document.querySelector(".scroll_top").style.transform = "translateX(20vw)";
  }
}

setInterval(()=>{
  window.onscroll = () => {
    if (window.matchMedia("(max-width: 1444px)").matches) {
      if (window.scrollY >= document.querySelector("#features").offsetTop - 350) {
        document.querySelectorAll(".feat").forEach((ele) => {
          ele.classList.add("trans_feat");
        })
      } else {
        document.querySelectorAll(".feat").forEach((ele) => {
          ele.classList.remove("trans_feat");
        })
      }
      if (window.scrollY >= document.querySelector("#services").offsetTop - 350) {
        document.querySelector(".services .container").classList.add("serv_active")
      } else {
        document.querySelector(".services .container").classList.remove("serv_active")
      }
      if (window.scrollY >= document.querySelector("#portfolio").offsetTop - 350) {
        document.querySelectorAll(".card").forEach((ele) => {
          ele.classList.add("trans_card");
        })
      } else {
        document.querySelectorAll(".card").forEach((ele) => {
          ele.classList.remove("trans_card");
        })
      }
      if (window.scrollY >= document.querySelector("#about").offsetTop - 350) {
        document.querySelector(".about .container").classList.add("trans_about");
      } else {
        document.querySelector(".about .container").classList.remove("trans_about");
      }
      if (window.scrollY >= document.querySelector("#contact").offsetTop - 350) {
        document.querySelector(".contact-content").style.transform = "translateX(0vw)";
      } else {
        document.querySelector(".contact-content").style.transform = "translateX(-80vw)";
      }
      if (window.scrollY >= document.querySelector("#features").offsetTop) {
        document.querySelector(".trans_header").classList.add("trans_header_active");
        document.querySelector(".scroll_top").style.transform = "translateX(0vw)";
      } else {
        document.querySelector(".trans_header").classList.remove("trans_header_active");
        document.querySelector(".scroll_top").style.transform = "translateX(20vw)";
      }
      scroll_animation()
    }
    if (window.matchMedia("(max-width: 768px)").matches){
      scroll_animation = function(){ };
      if (window.scrollY >= document.querySelector("#features").offsetTop){
        document.querySelector(".mobile_trans_header").classList.add("mobile_trans_header_active");
        document.querySelector(".scroll_top").style.right = "20px"
      }else{
        document.querySelector(".mobile_trans_header").classList.remove("mobile_trans_header_active");
        document.querySelector(".scroll_top").style.right = "-55px"
      }
    }
}
}, 100)

document.querySelectorAll("#toggle").forEach((ele)=>{
  ele.addEventListener("click", (e)=>{
    let toggle_ele = e.target;
    if (e.target.classList.contains("sp")){
      toggle_ele = e.target.parentElement;
    }
    toggle_ele.classList.toggle("transform");
    toggle_ele.parentElement.querySelector("#nav-links").classList.toggle("active_nav");
  })
})

document.querySelector(".scroll_top").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})
