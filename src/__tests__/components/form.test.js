import { render } from '@testing-library/react';
import { Form } from '../../components';

jest.mock('react-router-dom');

describe('<Form />', () => {
    it('renders the <Form /> with populated data', () => {
        const { container, getByText, getByPlaceholderText, getAllByText } = render(
            <Form>
                <Form.Title>Sign In</Form.Title>


                <Form.Base onSubmit={() => {}} method="POST">
                    <Form.Input
                        onChange={() => {}}
                        placeholder="Email address" />
                    
                    <Form.Input
                        type="password"
                        autoComplete="off"
                        onChange={() => {}}
                        placeholder="Password" />                           

                    <Form.Submit
                        disabled
                        type="submit">
                        Sign In
                    </Form.Submit>
                </Form.Base>

                <Form.Text>
                    New to Netflix?{/*  <Form.Link to="/signup">Sign up now.</Form.Link> */}
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </Form.TextSmall>
            </Form>  
        );      

        expect(
            getByText("This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.")
        ).toBeTruthy();
        expect(getAllByText("Sign In")).toBeTruthy();
        expect(getAllByText("Sign In")[1].disabled).toBeTruthy();
        expect(getByPlaceholderText('Email address')).toBeTruthy();
        expect(getByPlaceholderText('Password')).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it('renders the <Form /> with an error', () => {
        const { container, getByText, getAllByText } = render(
            <Form>
                <Form.Title>Sign In</Form.Title>

                <Form.Error>Your email address is already being used</Form.Error>
                     
                <Form.Base onSubmit={() => {}} method="POST">
                    <Form.Input
                        onChange={() => {}}
                        placeholder="Email address" />
                    
                    <Form.Input
                        type="password"
                        autoComplete="off"
                        onChange={() => {}}
                        placeholder="Password" />                           

                    <Form.Submit
                        disabled
                        type="submit">
                        Sign In
                    </Form.Submit>
                </Form.Base>
                
                <Form.Text>
                    New to Netflix?{/*  <Form.Link to="/signup">Sign up now.</Form.Link> */}
                </Form.Text>
                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                </Form.TextSmall>
            </Form>  
        );      

        expect(getByText("Your email address is already being used")).toBeTruthy();
        expect(getAllByText("Sign In")).toBeTruthy();
        expect(getAllByText("Sign In")[1].disabled).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

});
