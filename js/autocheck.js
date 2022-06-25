/// 5/48
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


// 6/48

function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line

    numbers.forEach(function (number, value) {
        if(number > value)
        filteredNumbers.push(number);
        
    });
  
    /* for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] > value) {
        filteredNumbers.push(numbers[i]);
      }
    } */
  
    // Change code above this line
    //return filteredNumbers;
    console.log(filterArray)
  }
  filterArray([1, 2, 3, 4, 5], 3)// возвращает [4, 5]
  /* filterArray([1, 2, 3, 4, 5], 4)// возвращает [5]
  filterArray([12, 24, 8, 41, 76], 38)//возвращает [41, 76]
  filterArray([12, 24, 8, 41, 76], 20)// возвращает [24, 41, 76] */