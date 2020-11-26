import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, SignIn, SignUp, Browse } from './pages';

import * as ROUTES from './constants/routes';
import { IfUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';


function App() {
    const user = useAuthListener();

    return (
        <Router>
            <IfUserRedirect
                exact
                user={user}
                path={ROUTES.HOME} 
                loggedInPath={ROUTES.BROWSE} >                    
                <Home />
            </IfUserRedirect>
            <IfUserRedirect
                user={user}
                path={ROUTES.SIGN_IN} 
                loggedInPath={ROUTES.BROWSE} >                    
                <SignIn />
            </IfUserRedirect>
            <IfUserRedirect
                user={user}
                path={ROUTES.SIGN_UP} 
                loggedInPath={ROUTES.BROWSE} >
                <SignUp />
            </IfUserRedirect>
            <ProtectedRoute
                user={user}
                path={ROUTES.BROWSE}
                redirectTo={ROUTES.SIGN_IN} >
                <Browse />
            </ProtectedRoute>
            <IfUserRedirect
                user={user}
                path="*"
                loggedInPath={ROUTES.BROWSE} >
                <Home />
            </IfUserRedirect>

        </Router>
    );
}

export default App;
