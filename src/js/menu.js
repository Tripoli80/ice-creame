(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');

  const menuLinks = document.querySelectorAll('.mobile__links');
  menuBtnRef.addEventListener('click', () => {
    handleMenu(menuBtnRef);
  });
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      handleMenu(menuBtnRef);
    });
  });
})();
function handleMenu(element) {
  const mobileMenuRef = document.querySelector('[data-menu]');
  const expanded = element.getAttribute('aria-expanded') === 'true' || false;
  element.classList.toggle('is-active');
  element.setAttribute('aria-expanded', !expanded);
  mobileMenuRef.classList.toggle('is-open');
}
