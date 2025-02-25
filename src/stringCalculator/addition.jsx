
const add = (numbers) => {
    let outputSum = 0;
    if(numbers !== "") {
        let splittedNumbers = numbers?.split(',');
        for(let i = 0; i < splittedNumbers?.length; i++) {
            outputSum += parseInt(splittedNumbers[i]);
        }
    }
    return outputSum;
}

export default add;
