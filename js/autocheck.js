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

// 11/48
/* const filterArray = (numbers, value) => {
    const filteredNumbers = [];

    numbers.forEach((number) => {
        if (number > value) {
            filteredNumbers.push(number);
        }
    });

    // Change code above this line
    //return filteredNumbers;
    console.log (filteredNumbers)
}
filterArray([1, 2, 3, 4, 5], 3); //возвращает [4, 5]
filterArray([1, 2, 3, 4, 5], 4); //возвращает [5]
filterArray([1, 2, 3, 4, 5], 5); //возвращает []
filterArray([12, 24, 8, 41, 76], 38); //возвращает [41, 76]
filterArray([12, 24, 8, 41, 76], 20); //возвращает [24, 41, 76] */

// 12/48
/* const getCommonElements = (firstArray, secondArray) => {
    const commonElements = [];

    firstArray.forEach((element) => {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        }
    });

    // Change code above this line
    //return commonElements;
    console.log (commonElements)
}
getCommonElements([1, 2, 3], [2, 4]); //возвращает [2]
getCommonElements([1, 2, 3], [2, 1, 17, 19]); // возвращает [1, 2]
getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); // возвращает [12, 27, 3]
getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); //возвращает [10, 30, 40]
getCommonElements([1, 2, 3], [10, 20, 30]); //возвращает [] */

// 13/48
/* function changeEven(numbers, value) {
    // Change code below this line
    const newArray = [];
    numbers.forEach(number => {
        if (number % 2 === 0) {
            newArray.push(number + value);
        } else newArray.push(number);
    });

    //return newArray
    console.log(newArray);
    // for (let i = 0; i < numbers.length; i += 1) {
    //   if (numbers[i] % 2 === 0) {
    //     numbers[i] = numbers[i] + value;
    //   }
    // }
    //console.log(numbers)
    // Change code above this line
}
changeEven([1, 2, 3, 4, 5], 10); //возвращает новый массив [1, 12, 3, 14, 5]
changeEven([2, 8, 3, 7, 4, 6], 10); //возвращает новый массив [12, 18, 3, 7, 14, 16]
changeEven([17, 24, 68, 31, 42], 100); //возвращает новый массив [17, 124, 168, 31, 142]
changeEven([44, 13, 81, 92, 36, 54], 100); // возвращает новый массив [144, 13, 81, 192, 136, 154] */

// 14/48

/* const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// Change code below this line

const planetsLengths = planets.map(planet => planet.length)
console.log(planetsLengths); */

//15/48
/* const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      rating: 8.51,
    },
    {
      title: "The Dream of a Ridiculous Man",
      author: "Fyodor Dostoevsky",
      rating: 7.75,
    },
    { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
    { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  ];
  // Change code below this line
  
  const titles = books.map(book => book.title);
  console.log(titles)
   */
//16/48
/* const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism"],
    },
  ];
  // Change code below this line
  
  const genres = books.flatMap(book => book.genres);
 console.log(genres) */

//17/48
// Change code below this line
/* const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        skills: ["ipsum", "lorem"],
        gender: "male",
        age: 37,
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
        gender: "female",
        age: 34,
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        skills: ["nulla", "anim", "proident", "ipsum", "elit"],
        gender: "male",
        age: 24,
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        skills: ["adipisicing", "irure", "velit"],
        gender: "female",
        age: 21,
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        skills: ["ex", "culpa", "nostrud"],
        gender: "male",
        age: 27,
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        skills: ["non", "amet", "ipsum"],
        gender: "male",
        age: 38,
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        skills: ["lorem", "veniam", "culpa"],
        gender: "female",
        age: 39,
    },
];
const getUserNames = users => users.map(user => user.name);

console.log(getUserNames);
// Change code above this line */
 

// 18/48
// Условие предыдущей задачи
//const getUserEmails =  users =>  users.map(user => user.email);

// 19/48
/* const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Change code below this line

const evenNumbers = numbers.filter( number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(evenNumbers)
console.log(oddNumbers) */

///20/48
const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      genres: ["adventure", "history"],
    },
    {
      title: "Beside Still Waters",
      author: "Robert Sheckley",
      genres: ["fiction", "mysticism"],
    },
    {
      title: "Redder Than Blood",
      author: "Tanith Lee",
      genres: ["horror", "mysticism", "adventure"],
    },
  ];
  // Change code below this line
  const allGenres = books.flatMap(book => book.genres);
  const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index);
  console.log(allGenres)
  console.log(uniqueGenres)
  