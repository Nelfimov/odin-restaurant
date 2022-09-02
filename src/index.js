import getMenu from "./menu";
import getContact from "./contact";
import getOpening from "./opening";
import getFooter from "./footer";
import getHeader from "./header";

const content = document.getElementById('content');
const body = document.getElementById('body');

document.onload = content.appendChild(getHeader());
document.onload = body.appendChild(getMenu());
document.onload = content.appendChild(getFooter());

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
