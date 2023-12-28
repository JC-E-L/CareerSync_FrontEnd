function setRouter() {
  switch (window.location.pathname) {
    case "/":
    case "/index.html":
    case "/register.html":
      if (localStorage.getItem("token")) {
        window.location.pathname = "/homepage.html";
      }
      break;
      
    case "/homepage.html":
      if (!localStorage.getItem("token")) {
        window.location.pathname = "/index.html";
      }
      break;

    default:
      break;
  }
}
export { setRouter };
