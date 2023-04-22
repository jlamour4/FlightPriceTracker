import { auth, database } from 'utils/firebase/firebase';
import { ref } from 'firebase/database';
import { useDatabaseSnapshot } from '@react-query-firebase/database';

const UserProfile = () => {
    const dbRef = ref(database, 'users');
    const users = useDatabaseSnapshot(['users'], dbRef);

    console.log('WOOOOOOOOOOOOOOOOOOOOOOOP');
    console.log(users);
};

export default UserProfile;
