const countries:string[] = ["australia","netherlands","united states","united kingdom","canada"];
console.log(countries);

//sorting original order without changing in original array
let arr:string[]=Array.from(countries);
let demo:string[]=arr.sort();
console.log("Alphabatically Sorted ",demo);
//showing original array is in it's original state
console.log("original array ",countries);


//reversing original order without changing in original array
let rev:string[]=demo.reverse();
console.log("reverse Array ",rev);
//shwing that original array is in its original state
console.log("original array ",countries);
//reversing array changing original state
console.log("reversed to change order",countries.reverse());
//showing original state is changed
console.log(countries);
//reversing array regaining original state
console.log("reversed to regain original order",countries.reverse());
//Alphabatically sorting array changing original state
console.log("arrange in alphabetic order",countries.sort());
//showing array's original state is changed
console.log(countries);
// again reversing array regaining original state
console.log("rearrange in original order",countries.sort());











