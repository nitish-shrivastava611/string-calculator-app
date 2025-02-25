
const add = (numbers) => {
    let outputSum = 0;
    if(numbers !== "") {
        let splittedNumbers = numbers?.split(/[,\n\\n]/);
        for(let i = 0; i < splittedNumbers?.length; i++) {
            outputSum += !isNaN(parseInt(splittedNumbers[i]))
                ? parseInt(splittedNumbers[i])
                : 0;
        }
    }
    return outputSum;
}

export default add;
