import { url, successNotification, errorNotification } from "../utils/util.js";

document.addEventListener("DOMContentLoaded", () => {
  // Here lies the ngrok URL

  const form_login = document.getElementById("form_login");

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
    const response = await fetch(url + "/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "ngrok-skip-browser-warning": "69420",
        Authorization: "Bearer" +  localStorage.getItem("token"),
      },
      body: formData,
    });

    // Get response if 200-299 status code
    if (response.ok) {
      const json = await response.json();
      console.log(json);

     localStorage.setItem("token", json.token);

      form_login.reset();

      successNotification("Login Successfull!", 5);

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
