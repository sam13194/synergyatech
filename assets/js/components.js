document.addEventListener('DOMContentLoaded', function() {
  // Cargar el encabezado
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    fetch('../../components/header.html')  // Subir dos niveles desde assets/js hasta la raíz
      .then(response => response.text())
      .then(data => {
        headerPlaceholder.innerHTML = data;
        // Activar el enlace actual en el menú
        activateCurrentLink();
      });
  }

  // Cargar el pie de página
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    fetch('../../components/footer.html')  // Subir dos niveles desde assets/js hasta la raíz
      .then(response => response.text())
      .then(data => {
        footerPlaceholder.innerHTML = data;
      });
  }
});

// Función para activar el enlace actual en el menú
function activateCurrentLink() {
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('#navmenu a');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPage || 
        (currentPage === '' && linkHref === 'index.html') ||
        (currentPage === 'index.html' && linkHref === 'index.html#hero')) {
      link.classList.add('active');
    }
  });
}