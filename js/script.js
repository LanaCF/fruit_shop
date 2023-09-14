// Name
// Weight
// Price

let products = [
    ['Melons', 75, 87],
    ['Watermelons', 57, 27],
    ['Plums', 30, 25],
    ['Peaches', 35, 73],
    ['Apricots', 25, 93],
    ['Cherries', 7, 137],
    ['Apples', 70, 25],
    ['Pears', 50, 75],
    ['Grape',25, 77],
    ['Raspberry', 25, 95],
    ['Strawberries', 27, 235],
    ['Bananas', 25, 35],
    ['Oranges', 15, 77],
    ['Tangerines', 10, 115],
    ['Kiwi', 10, 225],
    ['Mango', 5, 73],
    ['Passion fruit', 17, 575],
    ['Pineapples', 25, 175],
    ['Papaya', 10, 520],
    ['Pomegranate', 7, 173],
];



console.log('List of fruits:');
console.log('-----------------');

for (let i = 0; i < products.length; i++) {
    let fruit = products[i][0];
    let weight = products[i][1];
    let price = products[i][2];

    if (price > 100) {
        console.log(i + 1 + '.', fruit, weight + 'kg', price + 'UAH', '----- :(');
    } else if (price < 50) {
        console.log(i + 1 + '.', fruit, weight + 'kg', price + 'UAH', '----- :)');
    } else {
        console.log(i + 1 + '.', fruit, weight + 'kg', price + 'UAH');
    }

    // if (i = products.length, price++) {
    //     console.log(price);
    // }
}

console.log('-----------------');
console.log('Total cost of products in stock:')

while (i = 0, i < products.length, i++) {
    console.log(1);
}

let p = products[0][2];
let p1 = products[1][2];
let p2 = products[2][2];

console.log(p + p1 + p2);

// Завезли нові товари

products.push('Bilberry', 7, 207);
products.push('Blackberry', 20, 105);
products.push('Lokhina', 15, 250);
products.push('Currant', 5, 115);
products.push('Gooseberry', 7, 157);

// Оновлений список

for (let i = 0; i < products.length; i++) {
    let fruit = products[i][0];
    let weight = products[i][1];
    let price = products[i][2];

    if (price > 100) {
        console.log(i + 1 + '.', fruit, weight + 'kg', price + 'UAH', '----- :(');
    } else if (price < 50) {
        console.log(i + 1 + '.', fruit, weight + 'kg', price + 'UAH', '----- :)');
    } else {
        console.log(i + 1 + '.', fruit, weight + 'kg', price + 'UAH');
    }
}


