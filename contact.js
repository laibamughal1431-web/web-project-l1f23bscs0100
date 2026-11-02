var message = document.getElementById("message");
var charCount = document.getElementById("char-count");
var form = document.getElementById("contact-form");
var thankYou = document.getElementById("thank-you");

message.addEventListener("input", function () {
  charCount.textContent = message.value.length + " / 200";
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  thankYou.textContent = "Thank you, " + name + "! We will contact you soon.";
  form.reset();
  charCount.textContent = "0 / 200";
});
