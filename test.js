

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

//这是从Clone操作里添加的东西

//2019-03-01 14:31:14

//测试，真麻烦