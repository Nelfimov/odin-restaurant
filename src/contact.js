export default function getContact() {
  const rows = [
    ['telephone', 'better call saul'],
    ['Email', 'bettercallsaul@mail.org'],
  ]
  const headline = document.createElement('h1');
  headline.textContent = 'You can contact us';
  body.appendChild(headline);

  const table = document.createElement('table');

  let i = 0;
  while (i < 2) {
    let tr = document.createElement('tr');
    let j = 0;
    while (j < 2) {
      let td = document.createElement('td');
      if (j == 1) {
        let a = document.createElement('a');
        if (i == 0) {
          a.href = 'tel:+111111111111'
        } else {
          a.href = 'mailto:bettercallsaul@mail.org'
        }
        a.textContent = rows[i][j];
        td.appendChild(a);
      } else {
        td.textContent = rows[i][j];
      }
      tr.appendChild(td);
      ++j;
    }
    table.appendChild(tr);
    ++i;
  }

  return table;
}
