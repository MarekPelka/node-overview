var documentTable

document.addEventListener("DOMContentLoaded", function(event) {
    var table = 'mainTable'
    var mdlAscClass = 'mdl-data-table__header--sorted-ascending'
    var mdlDescClass = 'mdl-data-table__header--sorted-descending'

    var searchInputs = document.querySelectorAll('input');
    var sortControls = document.getElementsByClassName('sort');

    // Later for dynamic columns
    var columnsNumber = document.getElementById(table).rows[0].cells.length

    var options = {
            valueNames: ['material', 'quantity', 'price']
        },
        documentTable = new List(table, options);

    function search(e) {
        var curr = e.target;
        documentTable.filter(function(item) {
            if (item.values()[curr.dataset.searchType].indexOf(curr.value) > -1) {
                return true
            } else {
                return false;
            }
        })
    }

    searchInputs.forEach(function(input) {
        input.addEventListener('input', search)
    })
    Array.from(sortControls).forEach(function(cell) {
        cell.addEventListener('click', updateSortIcon)
    })

    function updateSortIcon(e) {
        console.log(e)
        Array.from(sortControls).forEach(function(cell) {
            removeSortClasses(cell)
        })
        if (e.target.classList.contains('asc'))
            e.target.classList.add(mdlAscClass)
        if (e.target.classList.contains('desc'))
            e.target.classList.add(mdlDescClass)
    }

    function removeSortClasses(element) {
        element.classList.remove(mdlAscClass)
        element.classList.remove(mdlDescClass)
    }
});