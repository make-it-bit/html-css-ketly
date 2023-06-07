document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    fetch("https://app.headlessforms.cloud/api/v1/form-submission/dBkK49lqz1", {
      method: "POST",
      body: new FormData(document.getElementById("form")),
    }).then(() => {
      window.location.href = "thankyou.html";
      // window.alert("Küsimustik edukalt täidetud!");
    });
  } catch (error) {
    alert(new Error("Midagi juhtus! Proovi uuesti!"));
  }
});
