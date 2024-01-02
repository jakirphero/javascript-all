// note: what is array declaration vs value
// array declarar kora hoy variable mote but value laker some 3 ta kj korti hobe . 1[] 2.value moddi akto space dawa [22 22 33] .3 value moddi (,) dawa [22, 22, 33]

// #. array pundamantal
    //. array length
    //. join()
    //. slice() 2ta jiga kat kora sigolo nawa start and end
    //. indexOf() array position
    //. push() add new element into last
    //. pop() remove form last element
    //. shift() remove to the first element
    //. unshift() add new element to array into first
    //. splice() 3 ta kj kore protom kon index sorabi 2 kotota bad debi 3 new element add kora
    //. set element
    //. get element
    //. find element
    //. map--------jita new element gon kore 

const fruits= ["banana", "apple", "peach"];
// document.getElementById("arrayLn").innerHTML = fruits;
// console.log(fruits.length);
// console.log(fruits.indexOf("apple"); find index of element
// console.log("I eat " + fruits.join(', '));
// console.log(fruits[1]) get the element
// fruits[2] = "orange"; set new element 
// console.log(fruits);

/**fruits.push('orange')
console.log(fruits)**/ //add new element into last 

/**
fruits.pop()
console.log(fruits)
*/ //remove last element use pop keyword

/**fruits.shift()
console.log(fruits)*/ //remove first element

/**fruits.unshift('orange')
console.log(fruits)*/ //add new element into first element

const numbers = [22, 11, 44, 13, 32, 66];
// const result = numbers.slice(-1);
// console.log(result);

/**--- splice ---- */
// const result = numbers.splice(1, 1, 33);
// console.log(numbers)

/**------map-------- */
// const result = numbers.map((num) => {
//     return num * 2;
// })
// console.log(result)