import getMenu from "./menu";
import getContact from "./contact";
import getOpening from "./opening";

const body = document.getElementById('body');
document.onload = () => body.appendChild(getMenu());
document.getElementById('menu').addEventListener('click', () => {
  body.innerHTML = '';
  body.appendChild(getMenu());
});
document.getElementById('contact').addEventListener('click', () => {
  body.innerHTML = '';
  body.appendChild(getContact());
});
document.getElementById('opening').addEventListener('click', () => {
  body.innerHTML = '';
  body.appendChild(getOpening());
});
