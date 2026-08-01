function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  if (email === "" || password === "") {
    alert("Please enter your email and password.");
    return;
  }

  alert("Login is working!");
  window.location.href = "home.html";
}

function signUp() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "" || password === "") {
    alert("Please enter your email and password.");
    return;
  }

  alert("Account created successfully!");
  window.location.href = "login.html";
}
