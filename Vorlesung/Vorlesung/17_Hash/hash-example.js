const items = [
    {name: "Ananas", price: 3, amount: 5},
    {name: "Shirt", price: 30, amount: 1},
    {name: "Auto", price: 3000, amount: 1},
    {name: "Bread", price: 1.5, amount: 10},
];

const sortType = {
    "string": (a, b) => a.localeCompare(b),
    "number": (a, b) => a - b
}

function sortItemsBy(items, sort) {
    const sortFn = sortType[typeof (items[0][sort])];
    return [...items].sort((a, b) => sortFn(a[sort], b[sort]));
}

console.log(sortItemsBy(items, "price"));
console.log(sortItemsBy(items, "amount"));
console.log(sortItemsBy(items, "name"));
