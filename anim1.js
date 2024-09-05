document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animated-element');
  
    function animateElements() {
      animatedElements.forEach(function (element) {
        element.classList.add('animate');
      });
    }
  
    // Вызовите функцию после некоторой задержки (например, 500 миллисекунд)
    setTimeout(animateElements, 500);
  });