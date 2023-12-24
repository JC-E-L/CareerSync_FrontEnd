
const url = "http://109.test";//Backend URL
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
  }, seconds * 1000);
}
export {url, successNotification, errorNotification };
