import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../../src/components/Counter';

describe('Test in <Counter />', () => {

    const initialValue = 100;

    test('should match with snapshot', () => {
        const { container } = render(<Counter />);
        expect(container).toMatchSnapshot();
    })

    test('should show the initial value of 100', () => {
        render(<Counter initialValue={ initialValue } />);
        const elementByText = screen.getByText(initialValue);
        expect(elementByText).toBeTruthy();
        expect(elementByText.innerHTML).toEqual(String(initialValue))

        const elementByRole = screen.getByRole('heading', { level: 2 });
        expect(elementByRole).toBeTruthy();
        expect(elementByRole.innerHTML).toEqual(String(initialValue))

        const elementByTestId = screen.getByTestId('test-counter');
        expect(elementByTestId).toBeTruthy();
        expect(elementByTestId.innerHTML).toEqual(String(initialValue))
    })

    test('should increment the value with +1 button', () => {
        render(<Counter initialValue={ initialValue } />);
        const btn = screen.getByText('+1');
        fireEvent.click(btn);
        const elementByTestId = screen.getByTestId('test-counter');
        expect(elementByTestId.innerHTML).toEqual(String(initialValue + 1));
    })

});