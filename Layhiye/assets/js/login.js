const login_btn = document.getElementById("login_btn");
const register_btn = document.getElementById("register_btn");
const btn = document.getElementById("btn");
const login = document.getElementById("Login");
const register = document.getElementById("Register");
let logArr = [];

register_btn.onclick = function () {
  login.style.left = "-400px";
  register.style.left = "50px";
  btn.style.left = "110px";
  login_btn.style.color = "black";
  register_btn.style.color = "white";
};

login_btn.onclick = function () {
  login.style.left = "50px";
  register.style.left = "450px";
  btn.style.left = "0px";
  register_btn.style.color = "black";
  login_btn.style.color = "white";
};
const inp_log_user = document.getElementById("inp_log_user");

const inp_log_password = document.getElementById("inp_log_password");

const submit_btn = document.querySelector(".submit_btn");

function getUser() {
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => {
      if (data.find((x) =>x.username === inp_log_user.value && x.parol === inp_log_password) === undefined) {
        logArr.push(data)
      }
      localStorage.setItem("login", JSON.stringify(logArr));
    });
}
getUser();
console.log(logArr);
