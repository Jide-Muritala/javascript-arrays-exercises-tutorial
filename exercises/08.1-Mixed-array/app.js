let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

//your code here
let newMix = [];
for (let i=0; i<mix.length; i++){
    const item = mix[i];
    newMix.push(typeof item);
}
console.log(newMix);