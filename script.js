document.addEventListener("DOMContentLoaded", () => {
  // Seleccionar todos los elementos FAQ
  const faqItems = document.querySelectorAll(".faq-item");

  // Añadir evento click a cada elemento FAQ
  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Verificar si el elemento actual está activo
      const isActive = item.classList.contains("active");

      // Cerrar todas las respuestas abiertas
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Alternar el estado del elemento actual
      item.classList.toggle("active");

      // Animación suave del icono y contenido
      const answer = item.querySelector(".faq-answer");
      if (!isActive) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = 0;
      }
    });
  });

  // Función para manejar el redimensionamiento de la ventana
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // Actualizar la altura máxima de las respuestas activas
      document
        .querySelectorAll(".faq-item.active .faq-answer")
        .forEach((answer) => {
          answer.style.maxHeight = answer.scrollHeight + "px";
        });
    }, 250);
  });
});
