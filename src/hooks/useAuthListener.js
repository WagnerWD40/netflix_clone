import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

function useAuthListener() {
    const { firebase } = useContext(FirebaseContext);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('@Netflix-clone:authUser')));

    function refreshUser(authUser) {
        if (authUser) {
            localStorage.setItem('@Netflix-clone:authUser', JSON.stringify(authUser));
            setUser(authUser)
        } else {
            localStorage.removeItem('@Netflix-clone:authUser');
            setUser(null);
        }
    }

    useEffect(() => {
        const listener = firebase
                            .auth()
                            .onAuthStateChanged(authUser => refreshUser(authUser))

        return () => listener();
    }, []);

    return user;
}

export default useAuthListener;