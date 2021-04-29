
// To start, define a `employee` variable and assign it to an `Object` containing
// `name` and `streetAddress` keys; you can use whatever values you like. Use
// literal syntax to create your `Object`. Various updates will be applied to this
// variable (destructively and non-destructively) in this lab.

const employee = {
    name: "Bob",
    address: "Los Angeles, CA"

};

// - `updateEmployeeWithKeyAndValue()`: this function should take in three
//   arguments: a `employee` `Object`, a `key` and a `value`. This function should
//   not mutate the `employee`; it should return a _new_ `Object` that has an
//   updated `value` for the `key` passed in.

// function updateEmployeeWithKeyAndValue(obj, key, value){
//     let newObj = {...obj};
//     newObj [key]= value;
//     return newObj;
// }

function updateEmployeeWithKeyAndValue(obj, key, value){
    return Object.assign ({}, obj, {[key]:value})
}
// - `destructivelyUpdateEmployeeWithKeyAndValue()`: this function should work the
//   same as `updateEmployeeWithKeyAndValue()` but it _should_ mutate the
//   `employee` `Object` passed in.

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key]=value
    return obj;
}
// - `deleteFromEmployeeByKey()`: this function should take in a `employee`
//   `Object` and a `key`. It should delete the property with that `key` from the
//   `employee` `Object`. This should not mutate the original `employee` `Object`;
//   it should return a _new_ `Object` that doesn't include the identified
//   key-value pair.
function deleteFromEmployeeByKey(obj, key){
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

// - `destructivelyDeleteFromEmployeeByKey()`: this function should work the same
//   as `deleteFromEmployeeByKey()` but it _should_ mutate the `employee` `Object`.

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
}