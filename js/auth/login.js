import { backendURL, successNotification, errorNotification } from "../utils/util.js";

document.addEventListener("DOMContentLoaded", () => {

  //set router

  const form_login = document.getElementById("form_login");
  //form login
  form_login.onsubmit = async (e) => {
    e.preventDefault();

    //Disable the button
    document.querySelector("#form_login button").disabled = true;
    document.querySelector(
      "#form_login button"
    ).innerHTML = `<span>Loading...</span>`;

    // Get values of form (input, textarea, select) and set it as form data
    const formData = new FormData(form_login);

    // Fetch the API of Register Input or user register
    const response = await fetch(backendURL + "/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    // Get response if 200-299 status code
    if (response.ok) {
      const json = await response.json();
      console.log(json);

     localStorage.setItem("token", json.token);

      form_login.reset();

      successNotification("Login Successfull!");

      window.location.pathname = "/homepage.html"
    }
    // Get response if 422 status code
    else if (response.status == 422) {
      const json = await response.json();

      errorNotification(json.message, 5);
    }

    // Enable button
    document.querySelector("#form_login button").disabled = false;
    document.querySelector("#form_login button").innerHTML = `Sign in`;
  };
});
