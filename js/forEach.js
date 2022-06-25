///
/* const numbers = [5, 10, 15, 20, 25];

numbers.forEach(function (number, index, array) {
    console.log('number',number);
}); */

function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line

    orderedItems.forEach(function (number) {
        totalPrice += number;
        console.log("number", number);
    });

    /*  for (let i = 0; i < orderedItems.length; i += 1) {
      totalPrice += orderedItems[i];
    } */

    // Change code above this line
    console.log(totalPrice)
    //return totalPrice;
}
calculateTotalPrice([12, 85, 37, 4]); //возвращает 138
