let loginStatus = "";
if (Object.keys(localStorage).length < 1) {
  loginStatus = "Login";
} else {
  loginStatus = "LOGOUT";
}
/*****************  TEMPLATES  *********************/

/* HEADER TEMPLATE */
const HEADER_TEMPLATE = `<a><img id="logo" src="/assests/images/logo.png" alt="logo" /></a>
<button id="login-button" type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#loginModal">${loginStatus}</button>`;
const HEADER = document.querySelector("#header");
HEADER.innerHTML = HEADER_TEMPLATE;
const LOGIN_BUTTON = document.querySelector("#login-button");
if (loginStatus === "LOGOUT") {
  LOGIN_BUTTON.removeAttribute("data-bs-target");
  LOGIN_BUTTON.removeAttribute("data-bs-toggle");
  LOGIN_BUTTON.addEventListener("click", login);
}
//get reference to the anchor tag to set it to point to index.html for other pages
const HOME_LINK = HEADER.firstChild;

/* FOOTER TEMPLATE */
const FOOTER_TEMPLATE = `<button type="button" class="btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#contactModal">Contact us</button>
<span>© 2020 ROOM SEARCH PVT. LTD.</span>
<span class="social-icons-container">
  <a href="https://www.facebook.com" target="_blank"><img src="./assests/images/facebook.png" alt="Facebook icon" class="social-icons"/></a>
  <a href="https://www.instagram.com" target="_blank"><img src="./assests/images/instagram.png" alt="Instagram icon" class="social-icons"/></a>
  <a href="https://twitter.com" target="_blank"><img src="./assests/images/twitter.png"  alt="Twitter icon" class="social-icons"/></a>
</span>`;
const FOOTER = document.querySelector("#footer");
FOOTER.innerHTML = FOOTER_TEMPLATE;

/* LOGIN MODAL TEMPLATE */
const LOGIN_MODAL_TEMPLATE = `
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Please Login</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="modal"
      ></button>
    </div>
    <div class="modal-body">
      <form id="login-form">
        <div class="container w-75 mx-auto">
          <div class="row mb-3 justify-content-between">
            <label for="username" class="col-sm-2 col-form-label"
              >Username:</label
            >
            <div class="col-sm-8">
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Enter Username"
                required
                autocomplete="on"
              />
            </div>
          </div>
          <div class="row mb-3 justify-content-between">
            <label for="inputPassword3" class="col-sm-2 col-form-label"
              >Password:</label
            >
            <div class="col-sm-8 ml-auto">
              <input
                type="password"
                class="form-control"
                id="password"
                autocomplete="off"
                placeholder="Enter Password"
                required
              />
            </div>
          </div>
        </div>
      </form>
    </div>
    <div class="modal-footer">
      <button
        type="Submit"
        class="btn btn-primary m-auto"
        form="login-form"
        id="login-submit"
      >
        Login
      </button>
    </div>
  </div>
</div>
`;
const LOGIN_MODAL = document.querySelector("#loginModal");
LOGIN_MODAL.innerHTML = LOGIN_MODAL_TEMPLATE;

/* CONTACT MODAL TEMPLATE */
const CONTACT_MODAL_TEMPLATE = `
<div class="modal-dialog">
  <div class="modal-content">
    <form method="GET" action="index.html">
      <div class="modal-header">
        <h5 class="modal-title">Get in touch</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
        ></button>
      </div>
      <div class="modal-body">
        <div class="container">
          <p>Thank you for reaching out!!!</p>
          <p>Please enter your email and we'll get back to you.</p>
          <div class="row mb-2">
            <label for="email" class="col-sm-2 col-form-label mr-1"
              >Email:</label
            >
            <div class="col-sm-8">
              <input
                type="email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Enter your email id"
                required
                autocomplete="off"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="Submit" class="btn btn-primary ml-auto">
          Submit
        </button>
      </div>
    </form>
  </div>
</div>`;
const CONTACT_MODAL = document.querySelector("#contactModal");
CONTACT_MODAL.innerHTML = CONTACT_MODAL_TEMPLATE;

/* Login Functionality */

function login(e) {
  if (loginStatus === "Login") {
    alert("Successfully LoggedIn");
    const LOGIN_FORM_ELEMENTS = this.elements;
    const PASSWORD = LOGIN_FORM_ELEMENTS["password"].value;
    const USERNAME = LOGIN_FORM_ELEMENTS["username"].value;
    localStorage.setItem(USERNAME, PASSWORD);
  } else {
    const key = Object.keys(localStorage)[0];
    localStorage.removeItem(key);
    location.reload();
  }
}

const LOGIN_FORM = document.querySelector("#login-form");
LOGIN_FORM.addEventListener("submit", login);
