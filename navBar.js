function myF(){
    let nav = document.getElementById("nav");
    if (nav.style.display === "flex") {
      nav.style.display = "none";
      console.log("inchis");
      
    } else {
      
      nav.style.display = "flex";
      nav.style.flexDirection="column"
      console.log("deschis")
    }
  }