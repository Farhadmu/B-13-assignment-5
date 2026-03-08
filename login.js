function login(){

const user = document.getElementById("username").value
const pass = document.getElementById("password").value

if(user === "admin" && pass === "admin123"){

localStorage.setItem("login","true")

window.location.href = "index.html"

}else{

alert("Invalid Username or Password")

}

}