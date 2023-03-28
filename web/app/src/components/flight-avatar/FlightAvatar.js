import { useEffect, useState } from 'react';
import { auth } from '../../firebase';
import { Avatar } from '@mui/material';

export default function FlightAvatar() {

	const [name, setName] = useState("");
	const [imageSrc, setImageSrc] = useState("userLoaded");

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
				setName(user.displayName);
				setImageSrc(user.photoURL);
      } else {
        console.log("USER IS SIGNED OUT");
      }
    })
	})

	return(
		<Avatar alt={name} src={imageSrc} />
	)
	
}