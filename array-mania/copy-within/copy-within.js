const array1 = ["a", "b", "c", "d", "e"];

//copy to index 0 the element at index 3
console.log(array1.copyWithin(0, 3, 4));
//copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));

//more examples
console.log("oh: " + array1.copyWithin(-2));
console.log(array1.copyWithin(0, -1, -2));
