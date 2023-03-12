function onSubClick(event) {
  event.preventDefault();

  let FirstName = document.getElementById("id_first").value;
  let LastName = document.getElementById("id_last").value;
  let Email = document.getElementById("id_mail").value;
  let Message = document.getElementById("id_message").value;

  let subSpan = document.getElementById("subSpan").innerHTML;

  document.getElementById("first").innerHTML = "";
  document.getElementById("last").innerHTML = "";
  document.getElementById("mail").innerHTML = "";
  document.getElementById("mess").innerHTML = "";

  if (FirstName < 2) {
    document.getElementById("first").innerHTML =
      "Your First Name Is Too Short!";
    return (document.getElementById("first").style.color = "red");
  }
  if (LastName < 2) {
    document.getElementById("last").innerHTML = "Your Last Name Is Too Short!";
    return (document.getElementById("last").style.color = "red");
  }
  if (Email.indexOf("@") == -1 || Email.indexOf(".") == -1) {
    document.getElementById("mail").innerHTML = "Please enter valid email!";
    return (document.getElementById("mail").style.color = "red");
  }
  if (Message < 2) {
    document.getElementById("mess").innerHTML = "Please write your message!";
    return (document.getElementById("mess").style.color = "red");
  }
  document.getElementById("id_first").value = "";
  document.getElementById("id_last").value = "";
  document.getElementById("id_mail").value = "";
  document.getElementById("id_message").value = "";
  document.getElementById("subSpan").innerHTML = "Your message has been sent";
  return (document.getElementById("subSpan").style.color = "green");
}
