let RUS = document.getElementById('RUS')
let ENG = document.getElementById('ENG')
let LT = document.getElementById('LT')

ENG.addEventListener('click', () => {
    window.location.href = "../ENG/index.html"
})

LT.addEventListener('click', () => {
    window.location.href = "../LT/indexLT.html"
})


emailjs.init("XXme0SoHm8PXwgDVr");

  // Находим форму
  const form = document.getElementById("contact-form");

  // Отправляем письмо при отправке формы
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // не перезагружаем страницу

    emailjs.sendForm("laurynazeima_18rl45s", "template_k7tw4um", form)
      .then(function() {
        alert("Сообщение отправлено, спасибо! ^_^");
        form.reset(); 
      })
      .catch(function(error) {
        alert("Ошибка: " + error.text);
      });
  });

    document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById("burger");
  const navLinks = document.getElementById("navLinks");

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});