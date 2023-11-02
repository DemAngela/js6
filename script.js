// Напишите функцию, которая разворачивает массив в обратном порядке.

// function myFunction(numbers) {
//     let number=[1, 2, 3, 4, 5]
//     for ( let i = number.length -1; i >= 0; i--) {
//         console.log(number[i])
//     }
// }
//
// myFunction()

// function clean(arr) {
//     return arr.filter(el => !!el)
// }
//
// console.log(clean([0, 1, false, 2, undefined, '', 3, null]))


// =========== Задача

//1
// let a =  ['a', 'b', 'c']
// let b = [1, 2, 3]
//
// console.log(a.concat(b))

//2
// let a = [1, 2, 3]
//  a.push(4, 5, 6)
//
// console.log(a)

//3

// let a = [1, 2, 3]
// a.unshift(4, 5, 6)
//
// console.log(a)

//4

// let a =  [1, 2, 3, 4, 5]
// let b = a.splice(1, 2, )
//
// console.log(a)

//5

// let a = {
//     js:'test',
//     jq: 'hello',
//     css: 'world'
// }
//
// console.log(Object.keys(a))

// ============

// let arr = ['Капуста', 'Репа', 'Редиска', 'Морковка']
//
// console.log(arr.join(','))

//============== "Каждый охотник"

// function reversCase(str) {
//     let rev = []
//     for ( let i = 0; i < str.length; i++) {
//         let letter = str[i];
//         if (letter === letter.toUpperCase()) {
//             rev.push(letter.toLowerCase())
//         } else {
//             rev.push(letter.toUpperCase())
//         }
//     }
//     return rev
// }
//
// console.log(reversCase('КаЖдЫй ОхОтНиК гДе СиДиТ фАзАн '))

// ============= сортировка

// const cars = [
//     {
//         make: "Ford",
//         model: "Mustang",
//         year: 1969,
//         color: "red",
//         price: 25000
//     },
//     {
//         make: "Ford",
//         model: "F-150",
//         year: 2017,
//         color: "blue",
//         price: 30000
//     },
//     {
//         make: "Tesla",
//         model: "Model S",
//         year: 2018,
//         color: "black",
//         price: 120000
//     },
//     {
//         make: "Chevrolet",
//         model: "Camaro",
//         year: 1970,
//         color: "orange",
//         price: 60000
//     },
//     {
//         make: "Dodge",
//         model: "Challenger",
//         year: 2019,
//         color: "red",
//         price: 35000
//     },
//     {
//         make: "Chevrolet",
//         model: "Corvette",
//         year: 2019,
//         color: "blue",
//         price: 90000
//     },
//     {
//         make: "Tesla",
//         model: "Model 3",
//         year: 2019,
//         color: "white",
//         price: 40000
//     },
//     {
//         make: "Mercedes",
//         model: "C-Class",
//         year: 2019,
//         color: "black",
//         price: 60000
//     }
// ]
//
// console.log(cars.filter(el => el.price >= 40000 && el.price <= 60000 && el.year <= 2019))