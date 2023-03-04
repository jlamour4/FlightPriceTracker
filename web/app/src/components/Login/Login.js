import './Login.css'
import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Checkbox, Button, IconButton } from '@mui/material'
import { Close } from '@mui/icons-material'
import { auth, signInWithEmailAndPassword, signInWithGoogle, registerWithEmailAndPassword } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from 'react-router-dom';

const loginModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [creatingNewAccount, setCreatingNewAccount] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    // if (loading) {
    //   // show loading icon
    //   return;
    // }
    // if (user) navigate("/dashboard");
  })

  return (
    <>
      {!creatingNewAccount ? (
        <Box sx={loginModalStyle}>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Sign in to your account
          </Typography>
          <IconButton aria-label="close">
            <Close/>
          </IconButton>
          </div>
          <Box component="form" autoComplete='on' sx={{'& .MuiTextField-root': { mt: 1, mb: 2}, '& .MuiButton-root': {mb: 1}, mt: 2}}>
              <div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <span>Email Address</span>
                  <TextField id="outlined-required" label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <span>Password</span>
                  <TextField id="outlined-password-input" label="Password" type="password" value={password} autoComplete="current-password" onChange={(e) => setPassword(e.target.value)}/>                
                </div>
                <Button sx={{width: '100%', backgroundColor: 'blue', color: "white"}}>Log In</Button>
                <Button sx={{width: '100%', backgroundColor: 'grey', color: "white"}}>Continue with Google</Button>
              </div>
          </Box>
          Don't have an account yet?
          <Button onClick={() => setCreatingNewAccount(true)}>Create an account</Button>
        </Box>
      ): (
        <Register/>
      )
      }
    </>
  )
}

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  // const history = useHistory();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    // if (user) history.replace("/dashboard");
  }, [user, loading]);
  return (
    <>
      <Box sx={loginModalStyle}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Create an account
      </Typography>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <span>Full Name</span>
        <TextField id="outlined-name" label="Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <span>Email Address</span>
        <TextField id="outlined-email" label="Email address" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>

      <div style={{display: 'flex', flexDirection: 'column'}}>
        <span>Password</span>
        <TextField id="outlined-password-input" label="Password" type="password" value={password} autoComplete="current-password" onChange={(e) => setPassword(e.target.value)}/>                
      </div>

      <div className="register__container">
        <input
          type="text"
          className="register__textBox"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="register__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>
          Register
        </button>
        <button
          className="register__btn register__google"
          onClick={signInWithGoogle}
        >
          Register with Google
        </button>
        <div>
          Already have an account? 
          <Button>Login</Button>
        </div>
        </div>
      </Box>
    </>
  );
}