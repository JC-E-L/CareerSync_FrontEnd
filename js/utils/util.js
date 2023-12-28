import { setRouter } from "../router/router.js";
setRouter();
//const backendURL = "https://43b9-210-1-131-192.ngrok-free.app/careerSync-110/public";//Backend URL
const backendURL = "http://109.test";


function getProfileInfo(){
  document.addEventListener("DOMContentLoaded", async () => {
      
        const response = await fetch(backendURL + "/api/user", {
          headers: {
            Accept: "application/json",
            "ngrok-skip-browser-warning": "69420",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
    
        // Get response if 200-299 status code
        if (response.ok) {
          const json = await response.json();

          //change the Fname and Lname into first_name and last_name
          document.getElementById("user_name").innerHTML = json.first_name + " " + json.last_name;
          
        }
        // Get response if 400 or 500 status code
        else {
          const json = await response.json();
    
          alert(json.message);
        }

    });
}

function successNotification(message, seconds = "") {
  document.querySelector(".alert-success").classList.remove("hidden");
  document.querySelector(".alert-success").classList.add("block");
  document.querySelector(".alert-success").innerHTML = message;

  if (seconds != "") {
    setTimeout(function () {
      document.querySelector(".alert-success").classList.remove("block");
      document.querySelector(".alert-success").classList.add("hidden");
    }, seconds * 1000);
  }
}
function errorNotification(message, seconds = "") {
  document.querySelector(".alert-unsuccessful").classList.remove("hidden");
  document.querySelector(".alert-unsuccessful").classList.add("block");
  document.querySelector(".alert-unsuccessful").innerHTML = message;

  if (seconds != "") {
    setTimeout(function () {
      document.querySelector(".alert-unsuccessful").classList.remove("block");
      document.querySelector(".alert-unsuccessful").classList.add("hidden");
    }, seconds * 1000);
  }
}
export { backendURL, successNotification, errorNotification, getProfileInfo};
