let theBools = [0,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1];

//your code here
let wiki = theBools.map(myFunction)

function myFunction(num) {
    if (num === 0) return 'woko';
    return 'wiki';
}

console.log(wiki)