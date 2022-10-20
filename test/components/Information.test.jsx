import { render, screen } from "@testing-library/react";
import Information from '../../src/components/Information';

describe('Test in <Information />', () => {
    test('should match with snapshot', () => {
        const { container } = render(<Information title='Hi!' name='Franz' />);
        screen.debug();
        expect(container).toMatchSnapshot();
    })
})