let sign_up = document.getElementById('sign-in')


var stringg ;




sign_up.addEventListener('click', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name-register').value;
    let password = document.getElementById('password-register').value;
    let email = document.getElementById('email-register').value;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


    if (name.length < 5) {
        stringg = "Name should be more than 5 characters";
        showToastregester(stringg);
        console.log(stringg);
    } 
    else if (password.length < 8) {
        stringg = "Password should be more than 8 characters";
        showToastregester(stringg);
        console.log(stringg);
    }
    else if (!emailRegex.test(email)) {
        stringg = "Email should be in a valid format";
        showToastregester(stringg);
        console.log(stringg);
    }
    else {
        registeretion(name,password,email);
    }
});
 

function registeretion(name,password,email) {

    fetch('https://65523ba35c69a7790329bd14.mockapi.io/store', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name, 
            password, 
            email}),
    })
    .then(response => response.json())
    .then(() => {
        
         stringg = "Registration successful!"
         showToastregester(stringg);
      
    })
    .catch(() => {
         stringg = "Registration Fuiled"
         showToastregester(stringg)
        
    });
    
}
displayBooks();
    let loginbtn = document.getElementById("login-btn");

loginbtn.addEventListener("click",function () {
    let emailLog = document.getElementById("emil-login").value;
    let passLog = document.getElementById("pass-Login").value;

    console.log(passLog);
    console.log(emailLog);
    login(emailLog,passLog)
})

    
function login(email,password) {
    
    fetch("https://65523ba35c69a7790329bd14.mockapi.io/store")
    .then(response => response.json())
    .then(data=>{
        data.forEach(element => {
            console.log(element.email);
            if (password===element.password && element.email===email) {
                console.log(element);
        stringg = "welcome to our website!"
        showToastlogin(stringg)
               
            }else{
                stringg = "filled Log in!"
                showToastlogin(stringg)
            }
            if (element.email==="aa1@gmail.com") {
                const admin = true
                
            }
        });
        
    })
}   
function showToastlogin(stringg) {
    var toast = document.getElementById("toast");
    toast.className = "show";
    toast.style.color = "red"
    toast.innerText = stringg;
    console.log(stringg);
    setTimeout(function(){
         toast.className = toast.className.replace("show", ""); }, 3000);
}
function showToastregester(stringg) {
    var toast = document.getElementById("toast1");
    toast.className = "show";
    toast.style.color = "red"
    toast.innerText = stringg;
    
    setTimeout(function(){
         toast.className = toast.className.replace("show", ""); }, 100);
}







function displayBooks() {
    fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=AzT5siRyuPwm1niNMQARQ32UYEHcwMFH`)
    .then((response)=> response.json())
    .then((data)=>{
        let books = data.results.books
        let container = document.getElementById("container");
        books.forEach((element) => {console.log(element);
            const card = document.createElement("div");
            card.innerHTML = ` <div class="card" style="width: 18rem">
            <img src="${element.book_image}" class="card-img-top" alt="..." />
            <div class="card-body p-3 d-flex flex-column justify-content-evenly">
              <p class="card-text fw-bold"> ${element.title}</p>
              <p class="card-text">
                ${element.description}</p>
            </div>
          </div>`;
           
          container.append(card)
          
          
          });
        
    })

    }
//   function deletbook(admin) {

//     if (admin) {
//         const delbtn = document.createElement("button");
//         delbtn.className = "btn btn-primary"
//         delbtn.addEventListener("click",deletbook())
        
//     }
    
//   }
