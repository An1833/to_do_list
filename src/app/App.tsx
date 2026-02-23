import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
 

import Auth from '../entities/User/ui/Auth'
// import AppBar from '@mui/material/AppBar';
// import ButtonAppBar from './AppBar.tsx';
import AppBar from './AppBar.tsx';


// import { useState } from 'react';
// import Button from '@mui/material/Button';
// import { Button, Container, InputAdornment, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
// import { AccountCircle, Email } from '@mui/icons-material';
import { useState } from 'react';
import type { UserType } from '../entities/User/model/userType.ts'
// import { jwtDecode } from "jwt-decode"





function App() {
	const [user, setUser] = useState<UserType | null>(null);
	// const [username, setUsername] = useState ('');
	// const [password, setPassword] = useState ('');
	// const [loading, setLoading] = useState (false);
	// const [loginFormName, setIsloginFormName] = useState("login");


	return (
		<>
			<AppBar username={user ?. username} /> 
			<div style={{ marginTop: '100px' }} /> 
			{user ? "" : <Auth setUser={setUser} />}
			
			
			{/* <AppBar/>
			<ButtonAppBar
  				access_token={user?.access_token ?? ''} 
  				username={user?.username ?? ''}/>
			<div style={{marginTop: "100px"}} />
			
			<Auth setUser={setUser}/> */}
		</>
	);
}

export default App
