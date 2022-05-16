
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
})

// console.log(produse);
let filterInput = document.getElementById("filter_product");
let sortingSelection = document.getElementById("sorting");

let mainProduse = document.querySelector("#product");
let wines = document.createElement("ul");
wines.classList.add("vinuri");
mainProduse.appendChild(wines);
// creare produs 
function createProduct(prodC,id){
console.log(prodC)

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

    let pret = document.createElement("p");
    pret.classList.add("p-price");
    pret.textContent = i.price + " Lei";
    elem.appendChild(pret);

    
    const a_details = document.createElement("a");
    a_details.classList.add("a-details");
    a_details.textContent = "Detalii";
    a_details.href = "product_details.html?id="+i.id;
  
    elem.appendChild(a_details);
    // pr.appendChild(wines);
 
  }
  // console.log(prod)
}
createProduct(produse);


sortingSelection.addEventListener("change", (e) => {
  // 1. Iau pretul pe care il caut
  const sortingValue = e.target.value;
  let sorted;
  const itemProd = [...produse];
  // 2. daca este valoarea asc
 
  if (sortingValue === "asc") {
    // 2.1 Sortez utilizatorii ascendent
    sorted = itemProd.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sortingValue === "desc") {
    sorted = itemProd.sort((a, b) => {
      return b.price - a.price;
    });
    // 2.2 daca este desc, atunci sortez invers pret
  } else {
    sorted = itemProd;
  }
  // 3. Randeaza utilizatorii gasiti.
 
  createProduct(sorted);
});



function filterBy(filterArray,checkboxArray,filterBy){
  filterArray.addEventListener("change", (event) => {
    if (event.target.checked) {
      let cbs = document.querySelectorAll(checkboxArray);
      // dam unchecked la toate checkbox-uriile mai putin pe cel care s-a dat click
      for(let checkbox of cbs ){
        if(checkbox.id !== event.target.id){
          checkbox.checked = false;
        }
      }
  
      filteredProduct = produse.filter(function (product) {
        if(filterBy === 'variety'){
          return product.variety === event.target.id;
        } else if(filterBy === 'brand'){
          return product.producator === event.target.id;
        }else if(filterBy === 'wine'){
          return product.wine === event.target.id;
        }else if(filterBy === 'price'){
          return product.price >= event.target.min && product.price <= event.target.max;
        }
      });
      createProduct(filteredProduct);
    }
  });
}

let wineVarietyFilter = document.querySelector('.wine_variety');
let wineBrandFilter = document.querySelector('.brand');
let wineTypeFilter = document.querySelector('.wine_type');
let winePiceFilter = document.querySelector('.price_checkbox');

filterBy(wineVarietyFilter,'.wine_variety_checkbox','variety');
filterBy(wineBrandFilter,'.producator_checkbox','brand');
filterBy(wineTypeFilter,'.wine_type_checkbox','wine');
filterBy(winePiceFilter,'.price_checkbox','price');

filterInput.addEventListener("change", (e) => {
  // 1. Iau numele pe care il caut
  const filterCriteria = e.target.value;

  if (filterCriteria !== "") {
    // 2. Extrage din toti utilazatorii doar utilizatorii care numele lor incepe cu valoarea cautata
    const filteredUsers = produse.filter(function (product) {
      const conditieFirst = product.producator
        .toLocaleLowerCase()
        .startsWith(filterCriteria.toLocaleLowerCase());
      const lastCondition = product.name
        .toLocaleLowerCase()
        .startsWith(filterCriteria.toLocaleLowerCase());
        const secondCondition = product.variety
        .toLocaleLowerCase()
        .startsWith(filterCriteria.toLocaleLowerCase());


      // returnea utilizatorul care are numele sau prenumele egal cu valoarea cautata
      return conditieFirst || lastCondition || secondCondition ;
    });
    // 3. Randeaza utilizatorii gasiti.
    createProduct(filteredUsers);
    console.log(filteredUsers)

  } else {
    createProduct(produse);
  }
});
function myFSoiuri() {
  let section = document.querySelector(".wine_variety");
  let icon = document.querySelector(" .fa-angle-down");

  if (section.style.display === "none") {
    icon.classList.add("fa-rotate");
    section.style.display = "flex";
    section.style.flexDirection = "column"
  } else {
    section.style.display = "none";
    icon.classList.remove("fa-rotate");
  }
}
function myFproducator() {
  let section = document.querySelector(".brand");
  let icon = document.querySelector(" .faIcon");

  if (section.style.display === "none") {
    icon.classList.add("fa-rotate");
    section.style.display = "flex";
    section.style.flexDirection = "column"
  } else {
    section.style.display = "none";
    icon.classList.remove("fa-rotate");
  }
}
function myFPrice() {
  let section = document.querySelector(".price_checkbox");
  let icon = document.querySelector(" .fa-Icon");

  if (section.style.display === "none") {
    icon.classList.add("fa-rotate");
    section.style.display = "flex";
    section.style.flexDirection = "column"
  } else {
    section.style.display = "none";
    icon.classList.remove("fa-rotate");
  }
}
function myFwineType() {
  let section = document.querySelector(".wine_type");
  let icon = document.querySelector(" .fa-faIcon");
  if (section.style.display === "none") {
    icon.classList.add("fa-rotate");
    section.style.display = "flex";
    section.style.flexDirection = "column"
  } else {
    section.style.display = "none";
    icon.classList.remove("fa-rotate");
  }
}