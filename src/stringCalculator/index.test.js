import { render, screen } from '@testing-library/react';
import StringCalculator from './index'
import add from './addition';

describe('StringCalculator Component', () => {

    test('For StringCalculator component renders correctly', () => {
        // Render the StringCalculator component without props
        render(<StringCalculator />);
    
        // Get the text content of the rendered component
        const componentElement = screen.getByText("String Calculator");
    
        // Assert that the main heading is in the document
        expect(componentElement).toBeInTheDocument();
    });

    test('For add function with empty string', () => {
        const result = add("")
        expect(result).toBe(0);
    });

    test('For add function with valid input numbers', () => {
        const result = add("1,2,5")
        expect(result).toBe(8);
    });

    test('For add function with input numbers having new line', () => {
        const result = add("1\n2,3,4")
        expect(result).toBe(10);
    });

    test('For add function to throw error when input numbers having negative value', () => {
        const result = () => add("1\n2,3,-4")
        expect(result).toThrow("negative numbers not allowed: -4");
    });

    test('For add function to throw error when input having multiple negative values & return all of them', () => {
        const result = () => add("1\n2,3,-4,5,-7,-2")
        expect(result).toThrow("negative numbers not allowed: -4,-7,-2");
    });
});
