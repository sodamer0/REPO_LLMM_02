document.getElementById('toggleBtn').addEventListener('click', function () {
  const box = document.getElementById('box');
  const btn = document.getElementById('toggleBtn');

  // Usamos getComputedStyle para detectar correctamente el estado inicial
  if (window.getComputedStyle(box).display === 'none') {
    box.style.display = 'block';
    btn.textContent = 'Ocultar Caja';
  } else {
    box.style.display = 'none';
    btn.textContent = 'Mostrar Caja';
  }
});