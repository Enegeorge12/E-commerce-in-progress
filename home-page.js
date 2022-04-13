

let produse=[];

// facem un promis/request produse din product.json ("server/local")
const endPoiundUrl= "./data/products.json";
fetch(endPoiundUrl)
.then((res)=>{
return res.json();
})
.then((productRes)=>{
produse=productRes;
createProduct(produse);
// console.log(produse)
})

let mainProduse = document.querySelector(".product");
let wines = document.createElement("ul");
wines.classList.add("vinuri");
mainProduse.appendChild(wines);


function createProduct(prodC){

    
    wines.innerHTML="";
      
      for (let i of prodC) {
        let elem = document.createElement("li");
        elem.classList.add("li-vinuri");
        elem.textContent = i.name;
        elem.style.listStyle = "none";
        wines.appendChild(elem);
        
    
        let imagine = document.createElement("img");
        imagine.src = i.image;
        imagine.setAttribute("width", "100%");
        imagine.setAttribute("margin", "10px");
      
        elem.appendChild(imagine);
    
        let pret = document.createElement("p-price");
        pret.classList.add("p-price");
        pret.textContent = i.price + " Lei";
        elem.appendChild(pret);
    
        let btnAddCart=document.createElement("button");
        btnAddCart.setAttribute('id','add-to-cart')
        btnAddCart.textContent="Adauga in cos"
        elem.appendChild(btnAddCart)
        const a_details = document.createElement("a");
        a_details.classList.add("a-details");
        a_details.textContent = "Detalii";
        a_details.href = '/product_details.html?id='+i.id;
      
        elem.appendChild(a_details);
        // pr.appendChild(wines);
     
      }
    //   console.log(produse)
      
    }
    createProduct(produse);
    

let prodDavino=produse.find(product=>product.producator ==="Davino");
console.log(prodDavino);






console.log(produse)