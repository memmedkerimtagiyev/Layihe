const inp_register_btn = document.getElementById("inp_register_btn");

const inp_reg_user = document.getElementById("inp_reg_user");

const inp_reg_password = document.getElementById("inp_reg_password");

const inp_reg_email = document.getElementById("inp_reg_email");




function getUsers() {
  fetch("http://localhost:3000/users")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

inp_register_btn.onclick = (e) => {
  e.preventDefault();

  console.log("salam");
  console.log(inp_reg_user.value);

  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: inp_reg_user.value,
      password: inp_reg_password.value,
      email: inp_reg_email.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getUsers();
    });
};
getUsers();
