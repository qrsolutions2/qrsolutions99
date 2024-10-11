export const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  e.preventDefault();
  const href = e.currentTarget.getAttribute('href');
  if (href) {
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
};