
const data = $('#input');
const table = $('#info');
const productN = $('#name');
const productC = $('#category');
const productP = $('#price');

$(document).ready(function () {
    $(data).bind('submit', function (e) {
        e.preventDefault();
        console.log("Submitted the form");
        const newRow = $('<tr>')[0];
        const cellName = $('<td>');
        const cellCate = $('<td>');
        const cellPrice = $('<td>');
        const delCell = $('<td>')[0];
        const delButton = $('<button>');
    
        table.append(newRow);
        newRow.append(cellName[0]);
        cellName.html(productN.val());
        newRow.append(cellCate[0]);
        cellCate.html(productC.val())
        newRow.append(cellPrice[0]);
        cellPrice.html(productP.val());
        newRow.append(delCell);
        delCell.append(delButton[0]);
        delButton.html('Delete');
        
    } )
    
    $(table).bind('click', function (e) {
        const item = e.target.closest('tr');
        item.remove();
    })
    
})

