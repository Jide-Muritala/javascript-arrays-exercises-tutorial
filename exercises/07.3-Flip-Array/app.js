let arr = [45,67,87,23,5,32,60];

//Your code here.
let newArray = []
for (let i = arr.length-1; i >= 0; i = i-1){
    let item = arr[i];
    newArray.push(item)
}
console.log(newArray);