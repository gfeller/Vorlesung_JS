const data = {};
data[0] = {name: "Michael", birthday: "19.05.1985"};

function fakeWebData(data) {
    return JSON.parse(JSON.stringify(data));
}

function update(id, person) {
    data[id] = {...data[id], ...fakeWebData(person)};
    return data[id];
}

function get(id) {
    return data[0];
}

module.exports = {update, get};
