// script.js
document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");

  const confirmPasswordInput = document.getElementById("confirmPassword");

  const togglePassword = document.getElementById("togglePassword");

  togglePassword.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    if (type === "text") {
      this.classList.remove("fa-eye");
      this.classList.add("fa-eye-slash");
    } else {
      this.classList.remove("fa-eye-slash");
      this.classList.add("fa-eye");
    }

    const type2 =
      confirmPasswordInput.getAttribute("type") === "password"
        ? "text"
        : "password";
    confirmPasswordInput.setAttribute("type", type2);
    if (type2 === "text") {
      this.classList.remove("fa-eye");
      this.classList.add("fa-eye-slash");
    } else {
      this.classList.remove("fa-eye-slash");
      this.classList.add("fa-eye");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("confirmPassword");
  const togglePassword = document.getElementById("togglePassword");

  togglePassword.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    if (type === 'text') {
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    } else {
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    }
    // Change color on toggle
  });
});
