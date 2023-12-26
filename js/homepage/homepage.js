import { backendURL } from "../utils/util.js";

document.addEventListener("DOMContentLoaded", () => {
  const btn_logout = document.getElementById("btn_logout");

  btn_logout.onclick = async () => {
    //Access the logout API endpoint 
    const response = await fetch(backendURL + "/api/logout", {
        headers: {
          Accept: "application/json",
          "ngrok-skip-browser-warning": "69420",
          Authorization: "Bearer " +  localStorage.getItem("token")
        },
      });
  
      // Get response if 200-299 status code
      if (response.ok) {
        localStorage.clear();
        //redirect the page 
        window.location.pathname = "/"
      }
      // Get response if 400 or 500 status code
      else{
        const json = await response.json();
  
       alert(json.message);
        
      }
  };
});
