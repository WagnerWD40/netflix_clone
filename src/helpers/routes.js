import { Route, Redirect } from 'react-router-dom';

function IfUserRedirect({ user, loggedInPath, children, ...rest }) {
    return (
        <Route
            {...rest} 
            render={() => !user 
                            ? children
                            : <Redirect to={{ pathname: loggedInPath }} /> } />
    );
}

function ProtectedRoute({ user, redirectTo, children, ...rest }) {
    return (
        <Route
            {...rest} 
            render={() => user 
                            ? children
                            : <Redirect to={{ pathname: redirectTo }} /> } />
    );
}

export {
    IfUserRedirect,
    ProtectedRoute,
}; 