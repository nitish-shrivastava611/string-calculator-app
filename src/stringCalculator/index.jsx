import {useState} from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import add from './addition';
const StringCalculator = () => {

    const [inputValue, setInputValue] = useState("");
    const [calculatedSum, setCalculatedSum] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleTrigger = () => {
        try {
            let result = add(inputValue)
            setCalculatedSum(typeof result === 'number' ? result : 0);
            setErrorMessage("")
        } catch (error) {
            setCalculatedSum(0)
            setErrorMessage(error)
        }
    }

    return (
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            maxWidth: 300,
            margin: 'auto',
            padding: 3,
        }}
        >
        <Typography variant="h4">
            String Calculator
        </Typography>
        <TextField
            label="Enter Text"
            variant="outlined"
            onChange={handleInputChange}
            fullWidth
        />
        <Button
            variant="contained"
            color="primary"
            onClick={handleTrigger}
        >
            Submit
        </Button>

        <Typography variant="h5">
            Sum of input is: {calculatedSum}
        </Typography>
        <Typography variant="h6" style={{color: 'red'}}>
            {errorMessage}
        </Typography>
        </Box>
    )
}

export default StringCalculator;
