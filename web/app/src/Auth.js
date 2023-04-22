import React, { useEffect, useState } from 'react';
import { auth, database } from 'utils/firebase/firebase';

import { useDispatch } from 'react-redux';
import { updateUser, resetUser } from 'features/user/userSlice';
import { ref, onValue, set } from 'firebase/database';
// import { useDatabaseSnapshot } from '@react-query-firebase/database';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [uid, setUid] = useState('');
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            console.log('BING BONG WE GOING IN');
            console.log(user);
            setPending(false);
            if (user) {
                setCurrentUser(user);
                setUid(user.uid);
                checkIfUserIsInDatabase(user);
                dispatch(updateUser({ uid: user.uid, name: user.displayName, email: user.email, profileImage: user.photoURL }));
            }
            // setUserData();
        });
    }, []);

    const checkIfUserIsInDatabase = (user) => {
        console.log();
        const emailRef = ref(database, 'users/' + user.uid + '/email');
        onValue(emailRef, (snapshot) => {
            const data = snapshot.val();
            !data ? createNewUserData(user) : getAndSetUserData();
        });
    };

    const createNewUserData = (user) => {
        console.log(user);
        set(ref(database, 'users/' + uid), {
            uid: user.uid,
            type: 'external',
            name: user.displayName,
            email: user.email,
            profile_picture: user.photoURL,
            phone: user.phoneNumber,
            flights: {}
        });
    };

    const getAndSetUserData = () => {
        //updateType
        // let ref = database.
        // ref.on('value', (snapshot) => {
        //     const data = snapshot.val();
        //     console.log(data);
        // });
    };

    if (pending) {
        return <>Loading...</>;
    }

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
