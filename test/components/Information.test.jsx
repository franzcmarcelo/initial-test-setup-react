import { render, screen } from '@testing-library/react';
import Information from '../../src/components/Information';

describe('Test in <Information />', () => {

    const title = 'Hola!';
    const name = 'Franz';

    test('should match with snapshot', () => {
        // container is same to document object module (DOM), node html
        const { container } = render(<Information title={ title } name={ name } />);

        // This generate a snapshot
        // This snapshot allow us to compare if component still renders the same the next time that we run the test
        // If the component changes, the snapshot will be different and the test will fail
        // We can update the snapshot with the command: npm run test -- -u or npm run test -- --updateSnapshot
        // Or during the test we can press 'u' key
        expect(container).toMatchSnapshot();
    })

    test('should show the title in the DOM whit Screen', () => {
        // screen is a global object that we can use to track the rendering of the DOM, through debug method
        // screen.debug();
        //  show: <body />

        render(<Information title={ title } name={ name } />);
        // screen.debug();
        //  show: <body><div><h1 data-testid="test-title">Hola!</h1><h2>Franz</h2></div></body>

        const titleElement = screen.getByText(title);
        expect(titleElement).toBeTruthy();
        expect(titleElement.innerHTML).toEqual(title);
    })

    test('should show the title in an h1 tag with Screen', () => {
        render(<Information title={ title } name={ name } />);
        const h1Element = screen.getByRole('heading', { level: 1 });
        expect(h1Element.innerHTML).toEqual(title);
    })

    test('should show the title in the DOM whit getByText and getByTestId', () => {
        const { getByText, getByTestId } = render(<Information title={ title } name={ name } />);

        // getByText is a function that allow us to search a text in the DOM
        // If the text is not found, the test will fail
        const titleElement1 = getByText(title);
        expect(titleElement1).toBeTruthy();

        // With getByTestId
        const titleElement2 = getByTestId('test-title');
        expect(titleElement2).toBeTruthy();
        expect(titleElement2.innerHTML).toEqual(title);
    })

    test('should show the title in the DOM whit container', () => {
        const { container } = render(<Information title={ title } name={ name } />);

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title)
    })
})