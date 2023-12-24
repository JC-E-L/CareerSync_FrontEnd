document.addEventListener("DOMContentLoaded", () => {
  // Here lies the ngrok URL
  const url = "http://109.test";

  const form_register = document.getElementById("form_register");

  form_register.onsubmit = async (e) => {
    e.preventDefault();
    console.log("click is okay");

    //Disable the button
    document.querySelector("#form_register button").disabled = true;
    document.querySelector("#form_register button").innerHTML = `<span data-te-loading-text-ref>Loading...</span>`;  

    // Get values of form (input, textarea, select) and set it as form data
    const formData = new FormData(form_register);

    // Fetch the API of Register Input or user register
    const response = await fetch(url + "/api/register", {
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

      document.querySelector(".alert-success").classList.remove("hidden");
      document.querySelector(".alert-success").classList.add("block");

      form_register.reset();

      successNotification("Registration Successfull!", 5);
    }
    // Get response if 422 status code
    else if (response.status == 422) {
      const json = await response.json();

      errorNotification(json.message, 5);
    }

    // Enable button
    document.querySelector("#form_register button").disabled = false;document.querySelector("#form_register button").innerHTML = `Sign up`;  
  };

  function successNotification(message, seconds) {
    document.querySelector(".alert-success").classList.remove("hidden");
    document.querySelector(".alert-success").classList.add("block");
    document.querySelector(".alert-success").innerHTML = message;

    setTimeout(function () {
      document.querySelector(".alert-success").classList.remove("block");
      document.querySelector(".alert-success").classList.add("hidden");
    }, seconds * 1000);
  }
  function errorNotification(message, seconds) {
    document.querySelector(".alert-unsuccessful").classList.remove("hidden");
    document.querySelector(".alert-unsuccessful").classList.add("block");
    document.querySelector(".alert-unsuccessful").innerHTML = message;

    setTimeout(function () {
      document.querySelector(".alert-unsuccessful").classList.remove("block");
      document.querySelector(".alert-unsuccessful").classList.add("hidden");
    }, seconds * 3000);
  }
});
