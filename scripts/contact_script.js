const login_form = document.getElementsByTagName("form");

login_form[0].addEventListener("submit", (e) => {
  e.preventDefault();

  window.alert("Küsimustik edukalt täidetud!");
  window.location.href = "thankyou.html";

  /*const first_name = document.getElementById("fname");
  const email = document.getElementById("email");

  if (first_name.value == "" || email.value == "") {
    window.alert("Jätsid mõne kohustusliku välja täitmata! Proovi uuesti!");
    window.location.href = "contact.html";
  } else {
    window.alert("Küsimustik edukalt täidetud!");
    window.location.href = "thankyou.html";
  }*/
});
