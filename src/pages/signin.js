import { useState, useContext } from 'react';

import HeaderContainer from '../containers/header';
import FooterContainer from '../containers/footer';
import { Form } from '../components';

import { FirebaseContext } from '../context/firebase';
import { useHistory } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

function SignIn() {
    const history = useHistory();
    const  { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState('');

    const isInvalid = [password, emailAddress].some( field => field === '');

    function handleSignIn(event) {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
                // console.log(error)
            });
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                            placeholder="Email address" />
                        
                        <Form.Input
                            value={emailAddress}
                            type="password"
                            autoComplete="off"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                            placeholder="Password" />                           

                        <Form.Submit
                            disabled={isInvalid}
                            type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}

export default SignIn;