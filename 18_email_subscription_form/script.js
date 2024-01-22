const scriptURL =
  "https://script.google.com/macros/s/AKfycbwTkZKK8-Kl7yz2l6H7zjFZkJXhxW_-HmHLr3c__vjssdza6kg70v5bXh6LHBL36kzgfg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Thank You For Subscribing!";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
