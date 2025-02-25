import {useState} from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import add from './addition';
const StringCalculator = () => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleTrigger = () => {
        const result = add(inputValue);
        console.log(result);
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
        </Box>
    )
}

export default StringCalculator;
