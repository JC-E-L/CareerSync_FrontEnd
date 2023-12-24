document.addEventListener("DOMContentLoaded", () => {
  // Here lies the ngrok URL
  const url = "http://109.test";
  
  const form_register = document.getElementById("form_register");

  form_register.onsubmit = async (e) => {
    e.preventDefault();

    //Disable the button
    document.querySelector("#form_register button").disabled = true;

    // Get values of form (input, textarea, select) and set it as form data
    const formData = new FormData(form_register);

    // Fetch the API of Register Input or user register
    const response = await fetch(
      url + "/api/register",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      }
    );

    // Get response if 200-299 status code
    if (response.ok) {
      const json = await response.json();
      console.log(json);

      form_register.reset();
    }
    // Get response if 422 status code
    else if (response.status == 422) {
      const json = await response.json();
      alert(json.message);
    }

    // Enable button
    document.querySelector("#form_register button").disabled = false;
  };
});
