const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
     const password = loginForm.fullname.value;
    const username = loginForm.username.value;
     const password = loginForm.email.value;
      const password = loginForm.phonenumber.value;
    const password = loginForm.password.value;
     const password = loginForm.confirmpassword.value;
      const password = loginForm.gender.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
