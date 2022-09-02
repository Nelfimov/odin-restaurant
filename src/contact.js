export default function getContact() {
  const rows = [
    ['telephone', 'better call saul'],
    ['Email', 'bettercallsaul@mail.org'],
  ]
  const headline = document.createElement('h1');
  headline.textContent = 'You can contact us';
  body.appendChild(headline);

  let i = 0;
  let j = 0;
  const table = document.createElement('table');

  while (i < 2) {
    const tr = document.createElement('tr');
    while (j < 2) {
      const td = document.createElement('td');
      const a = document.createElement('a');
      if (i == 0) {
        a.href = 'tel:+111111111111'
      } else {
        a.href = 'mailto:bettercallsaul@mail.org'
      }
      a.textContent = rows[i][j];
      td.appendChild(a);
      tr.appendChild(td);
      ++j;
    }
    table.appendChild(tr);
    ++i;
  }

  return table;
}
