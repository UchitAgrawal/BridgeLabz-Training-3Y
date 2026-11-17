// Q2 - Online Food Ordering (map + Error Handling)

const menu = [
    { name: "Burger", price: 120 },
    { name: "Pizza", price: 250 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 }
];

function calculateBill(orderItems) {
    const priceList = orderItems.map(itemName => {
        const item = menu.find(menuItem => menuItem.name.toLowerCase() === itemName.toLowerCase());

        if (!item) {
            throw new Error(`"${itemName}" is not available on the menu.`);
        }

        return item.price;
    });

    return priceList.reduce((total, price) => total + price, 0);
}

try {
    const bill = calculateBill(["Burger", "Pizza", "Pasta"]);
    console.log(`Order successful. Total bill: Rs. ${bill}`);
} catch (error) {
    console.log(`Unable to place order: ${error.message}`);
}

try {
    const bill = calculateBill(["Burger", "Sushi"]);
    console.log(`Order successful. Total bill: Rs. ${bill}`);
} catch (error) {
    console.log(`Unable to place order: ${error.message}`);
}
