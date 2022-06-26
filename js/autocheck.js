/// 5/48
/* function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;
    // Change code below this line

    orderedItems.forEach(function (number) {
        totalPrice += number;
        console.log("number", number);
    });

     //for (let i = 0; i < orderedItems.length; i += 1) {
     // totalPrice += orderedItems[i];
    //}

    // Change code above this line
    console.log(totalPrice)
    //return totalPrice;
}
calculateTotalPrice([12, 85, 37, 4]); //возвращает 138
 */

// 6/48
/* 
function filterArray(numbers, value) {
    const filteredNumbers = [];
    // Change code below this line

    numbers.forEach( number => {
      if ( number > value ) 
      filteredNumbers.push(number)
     } )
     
/// или

    for (let i = 0; i < numbers.length; i += 1) {
      if (numbers[i] > value) {
        filteredNumbers.push(numbers[i]);
      }
    }

    // Change code above this line
    //return filteredNumbers;
    console.log(filteredNumbers);
}
filterArray([1, 2, 3, 4, 5], 3); // возвращает [4, 5]
filterArray([1, 2, 3, 4, 5], 4); // возвращает [5]
filterArray([12, 24, 8, 41, 76], 38); //возвращает [41, 76]
filterArray([12, 24, 8, 41, 76], 20); // возвращает [24, 41, 76] */

// 7/48
/* function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Change code below this line

    firstArray.forEach(number => {
        if (secondArray.includes(number)) {
            commonElements.push(number);
        }
    });
    console.log(commonElements);
// Или

     for (let i = 0; i < firstArray.length; i += 1) {
    if (secondArray.includes(firstArray[i])) {
      commonElements.push(firstArray[i]);
    }
  }

    //return commonElements;
    // Change code above this line
}
getCommonElements([1, 2, 3], [2, 4]); // возвращает [2]
getCommonElements([1, 2, 3], [2, 1, 17, 19]); //возвращает [1, 2]
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); //возвращает [12, 27, 3]
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); // возвращает [10, 30, 40]
getCommonElements([1, 2, 3], [10, 20, 30]); // возвращает []
 */

// 8/48
// Change code below this line
/* const calculateTotalPrice = (quantity, pricePerItem) => {
    console.log(quantity * pricePerItem);
    return quantity * pricePerItem;
};

calculateTotalPrice(5, 100); //возвращает 500
calculateTotalPrice(8, 60); // возвращает 480
calculateTotalPrice(3, 400); //возвращает 1200 */

//10/48

/* const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  //return totalPrice;
  console.log(totalPrice)
}
calculateTotalPrice([12, 85, 37, 4]) //возвращает 138
calculateTotalPrice([164, 48, 291]) //возвращает 503
calculateTotalPrice([412, 371, 94, 63, 176]) //возвращает 1116
const numbers = [5, 10, 15, 20, 25]; */


