export default function getOpening() {
  const rows = [
    ['Mon-Fri', '12:00 - 13:00'],
    ['Sat-Sun', '12:00 - 03:00'],
  ]
  const headline = document.createElement('h1');
  headline.textContent = 'Our opening hours';
  body.appendChild(headline);

  let i = 0;
  let j = 0;
  const table = document.createElement('table');

  while (i < 2) {
    const tr = document.createElement('tr');
    while (j < 2) {
      const td = document.createElement('td');
      td.textContent = rows[i][j];
      tr.appendChild(td);
      ++j;
    }
    table.appendChild(tr);
    ++i;
  }

  return table;
}
