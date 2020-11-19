import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

function useAuthListener() {
    const { firebase } = useContext(FirebaseContext);

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    function refreshUser(authUser) {
        if (authUser) {
            localStorage.setItem('authUser', JSON.stringify(authUser));
            setUser(authUser)
        } else {
            localStorage.removeItem('authUser');
            setUser(null);
        }
    }

    useEffect(() => {
        const listener = firebase
                            .auth()
                            .onAuthStateChanged(refreshUser)

        return () => listener();
    }, []);

    return { user };
}

export default useAuthListener;