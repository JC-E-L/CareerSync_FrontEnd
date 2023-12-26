import { setRouter } from "../router/router.js";
setRouter();
//const url = "https://b821-49-146-32-48.ngrok-free.app/careerSync-110/public";//Backend URL
const backendURL = "http://109.test";
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
export { backendURL, successNotification, errorNotification };
