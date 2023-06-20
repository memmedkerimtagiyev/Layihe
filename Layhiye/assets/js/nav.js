window.addEventListener("scroll", function () {
  const nav = this.document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

const login_link = document.querySelector(".login_link");

if (localStorage.getItem("login")) {

  login_link.innerHTML = "";

  const username = JSON.parse(localStorage.getItem("login")).username;

  const log_out = document.createElement("div");
  const userNameNav = document.createElement("div");

  userNameNav.classList.add("userNameNav");
  log_out.classList.add("log_out");

  log_out.innerHTML = `<i class="fa-solid fa-right-from-bracket"></i>`;
  userNameNav.innerText = username;

  log_out.addEventListener("click", () => {
    localStorage.removeItem("login");
    window.location.reload();
  });

  login_link.append(log_out, userNameNav);
} else {
  login_link.innerHTML = `<a href="./log _in.html" class="icon-header-item">
    <i class="fa-solid fa-user-plus"></i>
  </a>`;
}
