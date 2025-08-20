// Define la función openModal en el ámbito global
function openModal(modalId) {
  const modal = new bootstrap.Modal(document.getElementById(modalId));
  modal.show();
}

// Inicialización opcional de los modals con eventos
document.addEventListener("DOMContentLoaded", () => {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    // Evento al mostrar el modal
    modal.addEventListener("show.bs.modal", (event) => {
      // Aquí puedes agregar lógica adicional, como cargar contenido dinámico
      const modalTitle = modal.querySelector(".modal-title");
      if (modalTitle) {
        modalTitle.style.color = "#002855"; // Ajusta el color del título al estilo UMSA
      }
    });

    // Evento al cerrar el modal (opcional)
    modal.addEventListener("hidden.bs.modal", (event) => {
      // Limpieza o acciones al cerrar, si las necesitas
    });
  });

  // Agregar efecto hover a los enlaces de los módulos
  const moduleLinks = document.querySelectorAll(
    ".module-card ol li, .module-card ul li"
  );
  moduleLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.color = "#c8102e"; // Rojo UMSA al pasar el ratón
    });
    link.addEventListener("mouseout", () => {
      link.style.color = "#005fa3"; // Vuelve al azul tec al salir
    });
  });
});

//fuciones de header
// Deshabilitar funcionalidad de Bootstrap en móviles
document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) {
    const navbarTogglers = document.querySelectorAll(".navbar-toggler");
    navbarTogglers.forEach((toggler) => {
      toggler.setAttribute("data-bs-toggle", "");
      toggler.setAttribute("data-bs-target", "");
      toggler.style.display = "none";
    });
  }
});

const toggler = document.querySelector(".mobile-navbar-toggler");
const menu = document.querySelector(".mobile-navbar-menu");
const header = document.querySelector(".header");
const dropdownToggles = document.querySelectorAll(".mobile-dropdown-toggle");

toggler.addEventListener("click", () => {
  menu.classList.toggle("active");
  toggler.classList.toggle("menu-open");
  header.classList.toggle("menu-open");
});

dropdownToggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    const dropdown = toggle.parentElement;
    dropdown.classList.toggle("active");
  });
});
//fin de funciones de header
