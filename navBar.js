function myF(){
    let nav = document.getElementById("nav");
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    
      
    } else {
      
      nav.style.display = "flex";
      nav.style.flexDirection="column"
      
    }
  }