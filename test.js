

function search(loc, arr, table) {
    if (table[loc] < 0) {
        return;
    } else if (arr[loc].indexof === -1 && table[loc] === 0) {
        arr.push(loc);
    } else {
        search([x - 1, y], arr, table);
        search([x + 1, y], arr, table);
        search([x, y + 1], arr, table);
    }
}