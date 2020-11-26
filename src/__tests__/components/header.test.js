import { render, fireEvent } from '@testing-library/react';
import { Header } from '../../components';

// jest.mock('../../components', () => {
//     return mockComponent("Header");
// });
jest.mock('react-router-dom');

describe('<Header />', () => {
    it('renders the basic <Header /> with a background ', () => {
        const { container, getAllByText, getByTestId } = render (
            <Header>
                <Header.Frame>
                    {/* <Header.Logo alt="Netflix" src="/images/logo.svg" /> */}
                    {/* <Header.ButtonLink >Sign In</Header.ButtonLink>
                    <Header.TextLink>Sign In</Header.TextLink> */}
                </Header.Frame>
            </Header>            
        );

        // const [button, textLink ] = getAllByText('Sign In');

        // expect(button).toBeTruthy();
        // expect(textLink).toBeTruthy();
        expect(getByTestId('header-bg')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });
});