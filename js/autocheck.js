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
/* const books = [
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
  console.log(uniqueGenres) */

// 21/48
/*   const books = [
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
  
  const MIN_RATING = 8;
  const AUTHOR = "Bernard Cornwell";
  // Change code below this line
  
  const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
  const booksByAuthor = books.filter(book => book.author === AUTHOR);
  console.log(topRatedBooks);
  console.log(booksByAuthor);
  //const best = students.filter(student => student.score >= HIGH_SCORE);
//console.log(best); // Масив об'єктів з іменами Mango і Kiwi */

// 22/48
/* const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
    },
]; */

/* const getUsersWithEyeColor = (users, color) =>  
users.filter(user => user.eyeColor === color);
 


console.log(getUsersWithEyeColor(users, "blue"))
console.log(getUsersWithEyeColor(users, "green"))
console.log(getUsersWithEyeColor(users, "brown")) */
// 23/48
/* const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
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
        gender: "female",
        age: 39,
    },
]; */

/* const getUsersWithAge = (users, minAge, maxAge) =>
    users.filter(user => minAge <= user.age && user.age <= maxAge);

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
console.log(getUsersWithAge(users, 80, 100)); */

// 24/48
/* const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
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
        gender: "female",
        age: 39,
    },
]; */
// Change code below this line
/* const getUsersWithFriend = (users, friendName) => {
  const userWithFriend = [];
  users.filter ((users) => {
    if (users.friends.includes(friendName)) {
      userWithFriend.push(users)
    }
  });
  return userWithFriend
} */
// или ( но этот вариант не принимается автопроверкой)
/* const getUsersWithFriend = (users, friendName) =>
    users
        .filter(user => user.friends.find(friend => friend === friendName))
        .map(user => user.name); */

/* console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));
console.log(getUsersWithFriend(users, "Adrian Crossr"));
 */

//25/48
/* const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
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
        gender: "female",
        age: 39,
    },
]; */
/* const getFriends = users =>
users
.flatMap(user => user.friends)
.filter(
  (user, index, array) => array.indexOf(user) === index,
);

console.log(getFriends (users));

 */

// 26/48
/* // const users как у 25 задания
//const getActiveUsers = users.filter(user=> user.isActive == true)
//const getActiveUsers = users.filter(user => user.isActive);

const getActiveUsers = (users) => {
  const newArr = users.filter(user=> user.isActive);
  return newArr;
  };
  console.log(getActiveUsers(newArr)) */

// 28/48
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
];
const BOOK_TITLE = "The Dream of a Ridiculous Man";
const AUTHOR = "Robert Sheckley";
// Change code below this line

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);

console.log(bookWithTitle);
console.log(bookByAuthor); */

//  29/48
/* const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
    },
]; */

/* const getUserWithEmail = (users, email) => {
  const userWithEmail =
    users.find(user => user.email === email);
    return userWithEmail 
  };
  
 */
//30/48
/* const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(item => item % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(item => item % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(item => item % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(item => item % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(item => item % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(item => item % 2 !== 0);

console.log(eachElementInFirstIsEven);
console.log(eachElementInFirstIsOdd);

console.log(eachElementInSecondIsEven);
console.log(eachElementInSecondIsOdd);

console.log(eachElementInThirdIsEven);
console.log(eachElementInThirdIsOdd); */

//31/48
/* const users = [
    {
      name: "Moore Hensley",
      email: "moorehensley@indexia.com",
      eyeColor: "blue",
      friends: ["Sharron Pace"],
      isActive: false,
      balance: 2811,
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      email: "sharlenebush@tubesys.com",
      eyeColor: "blue",
      friends: ["Briana Decker", "Sharron Pace"],
      isActive: true,
      balance: 3821,
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      email: "rossvazquez@xinware.com",
      eyeColor: "green",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      isActive: false,
      balance: 3793,
      gender: "male"
    },
    {
      name: "Elma Head",
      email: "elmahead@omatom.com",
      eyeColor: "green",
      friends: ["Goldie Gentry", "Aisha Tran"],
      isActive: true,
      balance: 2278,
      gender: "female"
    },
    {
      name: "Carey Barr",
      email: "careybarr@nurali.com",
      eyeColor: "blue",
      friends: ["Jordan Sampson", "Eddie Strong"],
      isActive: true,
      balance: 3951,
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      email: "blackburndotson@furnigeer.com",
      eyeColor: "brown",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      isActive: false,
      balance: 1498,
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      email: "shereeanthony@kog.com",
      eyeColor: "brown",
      friends: ["Goldie Gentry", "Briana Decker"],
      isActive: true,
      balance: 2764,
      gender: "female"
    }
  ]
  // Change code below this line

const isEveryUserActive = (users) => users.every(user => user.isActive === true)
   
// Change code above this line
console.log (isEveryUserActive (users)) */

// 32/48

/* const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line

const anyElementInFirstIsEven = firstArray.some(item => item % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some(item => item % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(item => item % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(item => item % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(item => item % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(item => item % 2 !== 0);

console.log(anyElementInFirstIsEven);
console.log(anyElementInFirstIsOdd);

console.log(anyElementInSecondIsEven);
console.log(anyElementInSecondIsOdd);

console.log(anyElementInThirdIsEven);
console.log(anyElementInThirdIsOdd);  */
// 33/48
/* const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
    },
];
const isAnyUserActive = users => users.some(user => user.isActive === true);
console.log(isAnyUserActive(users)); */

// 34/48

/* const players = {
    mango: 1270,
    poly: 468,
    ajax: 710,
    kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((acc, player) => acc + player, 0);

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;

console.log(totalPlayTime);
console.log(averagePlayTime); */

// 35/48
/* const players = [
    { name: "Mango", playtime: 1270, gamesPlayed: 4 },
    { name: "Poly", playtime: 469, gamesPlayed: 2 },
    { name: "Ajax", playtime: 690, gamesPlayed: 3 },
    { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
  ];
  // Change code below this line
  const totalAveragePlaytimePerGame  = players.reduce ((play, game)  => {
    return play + game.playtime / game.gamesPlayed
  }, 0)

console.log(totalAveragePlaytimePerGame) */

//36/48
/* const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
    },
]; */

/* const calculateTotalBalance = users => users.reduce((total, balance) => {
    return total + balance.balance;
}, 0);

console.log(calculateTotalBalance (users)); */

// 37/48
/* 
const getTotalFriendCount = users => users.reduce ((totalFriend, friend) => totalFriend += friend.friends.length,0);
console.log(getTotalFriendCount(users)) */

//  38/48
/* const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
    "Tanith Lee",
    "Bernard Cornwell",
    "Robert Sheckley",
    "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

console.log(ascendingReleaseDates);
console.log(alphabeticalAuthors);
 */

// 39/48
/* const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

const descendingReleaseDates = [...releaseDates].sort((a,b) => b-a);

console.log(ascendingReleaseDates);
console.log(descendingReleaseDates); */

// 40/48
/* const authors = [
    "Tanith Lee",
    "Bernard Cornwell",
    "Robert Sheckley",
    "Fyodor Dostoevsky",
    "Howard Lovecraft",
];
// Change code below this line

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare (b));

const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare (a));
console.log(authorsInAlphabetOrder);
console.log(authorsInReversedOrder);
 */

//   41/48
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

const sortedByAuthorName = [...books].sort((a, b) =>
    a.author.localeCompare(b.author),
);

const sortedByReversedAuthorName = [...books].sort((a, b) =>
    b.author.localeCompare(a.author),
);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

console.log(sortedByAuthorName);
console.log(sortedByReversedAuthorName);
console.log(sortedByAscendingRating);
console.log(sortedByDescentingRating); */

// 42/48

/* const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong"],
        isActive: true,
        balance: 3951,
        gender: "male",
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: ["Jacklyn Lucas", "Linda Chapman"],
        isActive: false,
        balance: 1498,
        gender: "male",
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
    },
]; */
/* //const sortByAscendingBalance = [...users].sort((a, b) => a.balance - b.balance);
const sortByAscendingBalance = users => [...users].sort((a, b) => a.balance - b.balance);

console.table(sortByAscendingBalance(users));

//Вызов функции со случайными, но валидными аргументами, возвращает правильное значение
 */

// 43/48
// const users из 42 задачи
/* const sortByDescendingFriendCount = users => {
    return [...users].sort((a, b) => b.friends.length - a.friends.length);
};

console.table(sortByDescendingFriendCount(users));
 */

//  44/48
// const users из 42 задачи
//localeCompare - ПОЗВОЛЯЕТ СРАВНИВАТЬ ПЕРВЫЕ БУКВЫ

/* const sortByName = users => {
    return [...users].sort((a, b) => a.name.localeCompare(b.name))   
}; 

console.table(sortByName (users)); */

// 45/48
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
    {
        title: "The Dreams in the Witch House",
        author: "Howard Lovecraft",
        rating: 8.67,
    },
];
const MIN_BOOK_RATING = 8; */

/* const names = books
    .filter(book => book.rating >= MIN_BOOK_RATING)
    .map(book => book.author)
    .sort((a, b) => a.localeCompare(b));
console.log(names)
 */

// 46/48
// const users из 42 задачи
/* 
const getNamesSortedByFriendCount = users => {
    const newUserNames = [...users]
        .sort((a, b) => a.friends.length - b.friends.length)
        .map(users => users.name);
    return newUserNames;
};

console.table(getNamesSortedByFriendCount(users)); */
//  47/48
const users = [
    {
        name: "Moore Hensley",
        email: "moorehensley@indexia.com",
        eyeColor: "blue",
        friends: ["Sharron Pace"],
        isActive: false,
        balance: 2811,
        gender: "male",
    },
    {
        name: "Sharlene Bush",
        email: "sharlenebush@tubesys.com",
        eyeColor: "blue",
        friends: ["Briana Decker", "Sharron Pace"],
        isActive: true,
        balance: 3821,
        gender: "female",
    },
    {
        name: "Ross Vazquez",
        email: "rossvazquez@xinware.com",
        eyeColor: "green",
        friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
        isActive: false,
        balance: 3793,
        gender: "male",
    },
    {
        name: "Elma Head",
        email: "elmahead@omatom.com",
        eyeColor: "green",
        friends: ["Goldie Gentry", "Aisha Tran"],
        isActive: true,
        balance: 2278,
        gender: "female",
    },
    {
        name: "Carey Barr",
        email: "careybarr@nurali.com",
        eyeColor: "blue",
        friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
        isActive: true,
        balance: 3951,
        gender: "male",
    },
    {
        name: "Blackburn Dotson",
        email: "blackburndotson@furnigeer.com",
        eyeColor: "brown",
        friends: [
            "Jacklyn Lucas",
            "Linda Chapman",
            "Adrian Cross",
            "Solomon Fokes",
        ],
        isActive: false,
        balance: 1498,
        gender: "male",
    },
    {
        name: "Sheree Anthony",
        email: "shereeanthony@kog.com",
        eyeColor: "brown",
        friends: ["Goldie Gentry", "Briana Decker"],
        isActive: true,
        balance: 2764,
        gender: "female",
    },
];
/* const getSortedFriends = users => {
    const sortFriends = [...users]
        //.sort((a, b) => a.friends.length - b.friends.length)
        .flatMap(users => users.friends)
        .sort((a, b) => a.localeCompare(b))
        .filter((user, index, array) => array.indexOf(user) === index);
    return sortFriends;
};
console.table(getSortedFriends(users)); */
// 48/48
const getTotalBalanceByGender = (users, gender) => {
    getBalance = [...users]
        .filter(user => user.gender === gender)
        .reduce((total, user) => {
            return total + user.balance;
        }, 0);
    return getBalance;
};
console.table(getTotalBalanceByGender(users, male));

/* делаем полную копию исходного массива, фильтруем по гендеру, подсчитываем с помощью редьюса сумму балансов (редьюс у тебя был правильно написан):
getBalance = [...users].filter(user => user.gender === gender).reduce((total, user) => {
  return total + user.balance;
}, 0);
 return  getBalance; */
