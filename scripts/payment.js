HOME_LINK.setAttribute("href", "index.html");
const PAY_NOW = document.querySelector("#pay-now");

if (loginStatus === "LOGOUT") PAY_NOW.removeAttribute("disabled");
else PAY_NOW.setAttribute("disabled", true);

PAY_NOW.addEventListener("click", () => {
  alert("Hi your booking is successful !!");
});
