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
});