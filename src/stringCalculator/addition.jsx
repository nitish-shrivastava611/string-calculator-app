/* Function to addition/Sum all the number provided in input
    Input: function will accept number devided by delimiter (comma, new line & semi colon)
    Output: function will return the Sum of all numbers present in input
    validations: 
        - It will identify empty input & return 0 (zero)
        - It will identify non numeric values & convert them to 0 (numeric)
        - It will identify negative values and throw an error with all the negative values
*/
const add = (numbers) => {
    if(numbers === "") {
        return 0;
    }
    let splittedNumbers = numbers?.split(/[,\n\\n;]/); // splitting with both delimiters ,(comma), \n (new line) and ;(semi colon)
    let negativeNumberArray = [];
    negativeNumberArray = splittedNumbers?.filter((number) => number < 0);
    if(negativeNumberArray?.length > 0) { //check for negative values, if exist then throw error
        throw `negative numbers not allowed: ${negativeNumberArray.join(',')}`;
    }
    return splittedNumbers?.reduce(sumAllNumbers, 0);
}

const sumAllNumbers = (total, number) => {
    return total += parseInt(number);
}

export default add;
