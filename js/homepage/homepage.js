import { backendURL, getProfileInfo } from "../utils/util.js";

getProfileInfo();
document.addEventListener("DOMContentLoaded", () => {
  const btn_logout = document.getElementById("btn_logout");
  btn_logout.onclick = async () => {
    //Access the logout API endpoint
    const response = await fetch(backendURL + "/api/logout", {
      headers: {
        Accept: "application/json",
        "ngrok-skip-browser-warning": "69420",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    // Get response if 200-299 status code
    if (response.ok) {
      localStorage.clear();

      alert("Logout Successful.");
      //redirect the page
      window.location.pathname = "/";
    }
    // Get response if 400 or 500 status code
    else {
      const json = await response.json();

      alert(json.message);
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  const userInfo = document.getElementById("user");
  const deleteAccountContainer = document.getElementById(
    "delete-account-container"
  );

  // Check if elements exist in the DOM
  if (userInfo && deleteAccountContainer) {
    userInfo.addEventListener("click", function () {
      // Toggle the visibility of the delete account container
      if (
        deleteAccountContainer.style.display === "none" ||
        deleteAccountContainer.style.display === ""
      ) {
        deleteAccountContainer.style.display = "block";
      } else {
        deleteAccountContainer.style.display = "none";
      }
    });
  }

  // Your existing code for the logout button
  deleteAccountContainer.onclick = async () => {
    const confirmDelete = confirm("Are you sure you want to delete your account?");
                    
    if (confirmDelete) {
        // Add your delete account logic here
        const response = await fetch(backendURL + "/api/destroy", {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "ngrok-skip-browser-warning": "69420",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });

        if (response.ok) {
          alert("Account deleted successfully!");
          // redirect the page
          localStorage.removeItem("token");
          window.location.pathname = "/";
      } else {
          const json = await response.json();
          alert(json.message);
      }
  };
}
});
