const data = document.getElementById('input');
const table = document.getElementById('info');
const productN = document.getElementById('name');
const productC = document.getElementById('category');
const productP = document.getElementById('price');
// console.log(productN);
// console.log(data);
// const newRow = document.createElement('tr');
// const cellName = document.createElement('td');



data.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Submitted the form");
    const newRow = document.createElement('tr');
    const cellName = document.createElement('td');
    const cellCate = document.createElement('td');
    const cellPrice = document.createElement('td');
    const delCell = document.createElement('td');
    const delButton = document.createElement('button');
  
    table.append(newRow);
    newRow.append(cellName);
    cellName.innerHTML = productN.value;
    newRow.append(cellCate);
    cellCate.innerHTML = productC.value;
    newRow.append(cellPrice);
    cellPrice.innerHTML = productP.value;
    newRow.append(delCell);
    delCell.append(delButton);
    delButton.innerHTML = 'Delete';
    console.log(table);
    console.log(delButton);

    
})