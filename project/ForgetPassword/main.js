function sendResetEmail() {
  var email = document.getElementById("email").value;
  let user = JSON.parse(localStorage.getItem("users"));

  for (let i = 0; i < user.lenght; i++) {
    if (user[i].email === email) {
      sendEmail(users[i].email);
      return;
    }
  }
}