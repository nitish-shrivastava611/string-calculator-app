/* Function to addition/Sum all the number provided in input
    Input: function will accept number devided by delimiter (comma, new line & semi colon)
    Output: function will return the Sum of all numbers present in input
    validations: 
        - It will identify empty input & return 0 (zero)
        - It will identify non numeric values & convert them to 0 (numeric)
        - It will identify negative values and throw an error with all the negative values
*/
const add = (numbers) => {
    let outputSum = 0;
    let negativeValues = [];
    if(numbers !== "") {
        let splittedNumbers = numbers?.split(/[,\n\\n;]/); // splitting with both delimiters ,(comma), \n (new line) and ;(semi colon)
        for(let i = 0; i < splittedNumbers?.length; i++) {
            if(parseInt(splittedNumbers[i]) < 0) { // checking for all negative values from input
                negativeValues.push(parseInt(splittedNumbers[i])); //pushing negative values
            } else {
                outputSum += !isNaN(parseInt(splittedNumbers[i])) // will check if input is not number, then convert it to 0
                    ? parseInt(splittedNumbers[i])
                    : 0;
            }
        }
    }
    if(negativeValues?.length > 0) { //check for negative values, if exist then throw error
        throw `negative numbers not allowed: ${negativeValues.join(',')}`;
    }
    return outputSum; //retrun sum of all inputs
}

export default add;
