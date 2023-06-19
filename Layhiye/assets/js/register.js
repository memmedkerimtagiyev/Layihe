const inp_register_btn = document.getElementById("inp_register_btn");

const inp_reg_user = document.getElementById("inp_reg_user");

const inp_reg_password = document.getElementById("inp_reg_password");

const inp_reg_email = document.getElementById("inp_reg_email");

// let logArr = [];

// if (JSON.parse(localStorage.getItem("Data")) !== null) {
//   logArr = JSON.parse(localStorage.getItem("Data"));
// }

// inp_register_btn.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const obj = {
//     username: inp_reg_user.value,
//     password: inp_reg_password.value,
//     email: inp_log_email.value,
//   };

//   logArr.push(obj);


//   let result1 = false;
//   console.log(logArr);
//   if (JSON.parse(localStorage.getItem("Data")) !== null) {
//     for (let i = 0; i < JSON.parse(localStorage.getItem("Data")).length; i++) {
//       console.log(JSON.parse(localStorage.getItem("Data"))[i].username);
//       if (JSON.parse(localStorage.getItem("Data"))[i].username === inp_reg_user.value) {
//         result1 = true;
//       } else {
//         result1 = false;
//       }
//     }
//   } else {
//     localStorage.setItem("Data", JSON.stringify(arr));
//   }
// });


// function getUsers() {
//   fetch("http://localhost:3000/users")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

// inp_register_btn.onclick = (e) => {
//   e.preventDefault();

//   console.log("salam");
//   console.log(inp_reg_user.value);

//   fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       Accept: "application.json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       username: inp_reg_user.value,
//       password: inp_reg_password.value,
//       email: inp_log_email.value,
//     }),
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       getUsers();
//     });
// };
// getUsers();
