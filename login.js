const user1 = {
    fistName : "john",
    lastName : "doe",
    password : "test",
    email : "ene.2456@gmail.com",
    country: "Bucuresti",
    city: "Bragadiru"
  }

  const user2 = {
    fistName : "ene",
    lastName : "george",
    password : "test",
    email : "ene@gmail.com",
    country: "Bucuresti",
    city: "Bragadiru"
  }

//   addUser(user1);
//   addUser(user2);

//adauga useri la inregistrare
  function addUser(userDetails){
    let users = JSON.parse(localStorage.getItem('users') || "[]");

    users.push(userDetails);
    localStorage.setItem("users", JSON.stringify(users));
  }


const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
	event.preventDefault(); // stop form submission
    let email = form.elements["email"].value;
    let password = form.elements["password"].value;
    let user = {};

    // validateEmail(email);
    //validare password ca nu este goala

    let users = JSON.parse(localStorage.getItem('users') || "[]");
    if(users.length !== 0){
        user = users.find(e => e.email === email);
    }
    
    if(user !== undefined){
        if(user.password === password){
            window.location.href= 'home.html';
        }else{
            alert('Mai baga o fisa !!!');
        }
    }else {
        alert('Mai baga 2 fise !!!');
    }
});

