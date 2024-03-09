

document.getElementById("button-login").addEventListener("click", () => {
    let userName = document.getElementById("userName").value;
let password = document.getElementById("password").value;
  if (userName == "hirusha" && password == "1234") {
    alert("login Success");
    location.href='homepage.html';
  }else{
    alert("login failed");
  }
});
