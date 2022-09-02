import restaurantIcon from './restaurant.svg';
import githubIcon from './Octocat.png';

export default function getHeader() {
  const divLeft = document.createElement('div');
  divLeft.id = 'left';
  // IMAGE
  const imgLeft = new Image();
  imgLeft.classList.add('header-icon');
  imgLeft.src = restaurantIcon;
  imgLeft.alt = 'logo';
  divLeft.appendChild(imgLeft);
  // SPAN
  const spanLeft = document.createElement('span');
  spanLeft.textContent = 'Restaurant page';
  divLeft.appendChild(spanLeft);
  // TABS
  const ul = document.createElement('ul');
  const ulRows = [
    ['menu', 'Menu'],
    ['opening', 'Opening hours'],
    ['contact', 'Contacts'],
  ];
  for (let i = 0; i < 3; i++) {
    let li = document.createElement('li');
    li.id = ulRows[i][0];
    li.textContent = ulRows[i][1];
    ul.appendChild(li);
  }

  // RIGHT
  const divRight = document.createElement('div');
  divRight.id = 'right';
  const aRight = document.createElement('a');
  aRight.href = 'https://github.com/nelfimov/';
  // SPAN
  const spanRight = document.createElement('span');
  spanRight.textContent = 'Github';
  aRight.appendChild(spanRight);
  // IMAGE
  const imgRight = new Image();
  imgRight.src = githubIcon;
  imgRight.classList.add('header-icon');
  imgRight.alt = 'github';
  aRight.appendChild(imgRight);
  divRight.appendChild(aRight);

  // HEADER
  const divHeader = document.createElement('div');
  divHeader.id = 'header';
  divHeader.appendChild(divLeft);
  divHeader.appendChild(ul);
  divHeader.appendChild(divRight);

  return divHeader;
}
