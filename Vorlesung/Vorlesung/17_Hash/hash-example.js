const items = [
    {name: "Ananas", price: 3, amount: 5, hidden: true},
    {name: "Shirt", price: 30, amount: 1, hidden: true},
    {name: "Auto", price: 3000, amount: 1, hidden: false},
    {name: "Bread", price: 1.5, amount: 10, hidden: false},
];

const sortType = {
    "string": (a, b) => a.localeCompare(b),
    "number": (a, b) => a - b,
    "boolean": (a, b) => Number(a) - Number(b),
}


function sortItemsBy(items, sort) {
    const sortFn = sortType[typeof (items[0][sort])];
    return [...items].sort((a, b) => sortFn(a[sort], b[sort]));
}



console.log(sortItemsBy(items, "price"));
console.log(sortItemsBy(items, "amount"));
console.log(sortItemsBy(items, "name"));
console.log(sortItemsBy(items, "hidden"));

/*
function sortItemsBy(arr, key, order = "asc") {
    if (!Array.isArray(arr)) {
        throw new Error("Erstes Argument muss ein Array sein.");
    }
    if (arr.length === 0) return [];

    if (!(key in arr[0])) {
        throw new Error(`Key "${key}" existiert nicht in den Objekten.`);
    }

    const multiplier = order === "desc" ? -1 : 1;

    return [...arr].sort((a, b) => {
        const valA = a[key];
        const valB = b[key];

        if (typeof valA === "number" && typeof valB === "number") {
            return (valA - valB) * multiplier;
        }

        if (typeof valA === "boolean" && typeof valB === "boolean") {
            return (Number(valA) - Number(valB)) * multiplier;
        }

        return String(valA).localeCompare(String(valB)) * multiplier;
    });
}
*/