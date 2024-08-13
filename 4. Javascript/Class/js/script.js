// alert("Hello world")

function Login() {
  event.preventDefault();

  let email = document.getElementById("emailId").value;
  let password = document.getElementById("passwordBy").value;

  if (!email) {
    alert("Please Enter Your Email");
    return;
  }

  if (!password) {
    alert("Please Enter Your Password");
    return;
  }

  console.log(password);
  document.getElementById("formOutput").innerHTML += email + "<br/>";
}
