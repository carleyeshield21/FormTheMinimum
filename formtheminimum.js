// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/5ac6932b2f317b96980000ca/train/javascript

function minValue(values){
    valuesarr = []
    for(i=0; i<=values.length-1; i++){
        valuesarr.push(values[i])
    }

    // Sorting the numbers into ascending order
    values.sort(function(a, b){return a-b});
    // console.log(values)

    // Getting the unique values, omitting the duplicates
    let unique = [...new Set(values)];
    // console.log(unique);

    // Converting the unique values to a string, the ascending order of the integers will be the smallest possible value
    arrstring = unique.toString()
    const lowestnumber = arrstring.replace(/,/g, '');
    console.log(`${lowestnumber} is the minimum number could be formed from ${valuesarr}. Without duplication`);

}
minValue([1, 9, 3, 1, 7, 4, 6, 6, 7])
console.log('=====')
minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9])
console.log('=====')
minValue([5, 6, 9, 9, 7, 6, 4])