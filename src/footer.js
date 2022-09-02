export default function getFooter() {
  const divFooter = document.createElement('div');
  divFooter.id = 'footer';

  const span = document.createElement('span');
  span.textContent = 'Great footer';

  divFooter.appendChild(span);

  return divFooter;
}