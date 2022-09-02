export default function getOpening() {
  const rows = [
    ['Mon-Fri', '12:00 - 23:00'],
    ['Sat-Sun', '12:00 - 03:00'],
  ]
  const headline = document.createElement('h1');
  headline.textContent = 'Our opening hours';
  body.appendChild(headline);

  const table = document.createElement('table');

  let i = 0;
  while (i < 2) {
    let tr = document.createElement('tr');
    let j = 0;
    while (j < 2) {
      let td = document.createElement('td');
      td.textContent = rows[i][j];
      tr.appendChild(td);
      j++;
    }
    table.appendChild(tr);
    i++;
  }

  return table;
}
