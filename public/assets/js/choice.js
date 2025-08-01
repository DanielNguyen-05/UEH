document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.visualizer-link');
  let transitioning = false;

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (transitioning) return;
      transitioning = true;

      const target = link.getAttribute('data-target');

      // Optional: hiệu ứng fade out
      document.body.style.transition = 'opacity 0.5s';
      document.body.style.opacity = '0.5';

      setTimeout(() => {
        window.location.href = target;
      }, 1000);
    });
  });
});