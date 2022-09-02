export default function getMenu() {
  const rows = [
    ['Number', 'Food', 'Price'],
    ['1', 'Macaroni', '$100'],
    ['2', 'Spaghetti', '$150'],
    ['3', 'Pizza', '$50'],
    ['4', 'Pasta', '$30'],
    ['5', 'Pizza di pasta', '$80'],
  ]
  const headline = document.createElement('h1');
  headline.textContent = 'We have lots to offer';
  body.appendChild(headline);

  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');


  let i = 0;
  while (i < 5) {
    let tr = document.createElement('tr');
    let j = 0;
    while (j < 3) {
      let td = document.createElement('td');
      td.textContent = rows[i][j];
      tr.appendChild(td);
      j++;
    }
    if (i === 0) {
      thead.appendChild(tr);
    } else {
      tbody.appendChild(tr);
    }
    i++;
  }
  const table = document.createElement('table');
  table.appendChild(thead);
  table.appendChild(tbody);

  return table;
}
