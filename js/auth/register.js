import { backendURL, successNotification, errorNotification } from "../utils/util.js";


document.addEventListener("DOMContentLoaded", () => {  
  // Here lies the ngrok URL
  
  //form register
  const form_register = document.getElementById("form_register");

  form_register.onsubmit = async (e) => {
    e.preventDefault();
    //Disable the button
    document.querySelector("#form_register button").disabled = true;
    document.querySelector("#form_register button").innerHTML = `<span data-te-loading-text-ref>Loading...</span>`;  

    // Get values of form (input, textarea, select) and set it as form data
    const formData = new FormData(form_register);

    // Fetch the API of Register Input or user register
    const response = await fetch(backendURL + "/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    // Get response if 200-299 status code
    if (response.ok) {


      form_register.reset();

      successNotification("Registration Successfull!", 5);
    }
    // Get response if 422 status code
    else if (response.status == 422) {
      const json = await response.json();

      errorNotification(json.message, 5);
    }

    // Enable button
    document.querySelector("#form_register button").disabled = false;
    document.querySelector("#form_register button").innerHTML = `Sign up`;  
  };
});
