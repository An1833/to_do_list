// import { useState } from 'react';
// import Button from '@mui/material/Button';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
 
import './App.css'
import AppBar from '@mui/material/AppBar';

import ButtonAppBar from './AppBar.tsx';
import { Button, Container, InputAdornment, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { AccountCircle, Email } from '@mui/icons-material';
import { useState, type SyntheticEvent } from 'react';
import { jwtDecode } from "jwt-decode"




function App() {
	const [user, setUser] = useState <{access_token:string, username:string}|null>(null)> 
	const [username, setUsername] = useState ('');
	const [password, setPassword] = useState ('');
	const [loading, setLoading] = useState (false);
	const [loginFormName, setIsloginFormName] = useState("login");

	const handleUserNameChange = (
		e: SyntheticEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		setUsername (e.currentTarget.value)
	};

	const handlePasswordChange = (
				e: SyntheticEvent<HTMLTextAreaElement | HTMLInputElement>,
	) => {
		setPassword (e.currentTarget.value)
	};
	
	const handeleLogin = async () => {
		setLoading(true);
		const loginResponse = await fetch ("https://todos-be.vercel.app/auth/login", {
			method: "POST",
			body: JSON.stringify ({ username, password }),
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
				},
			},
		);

		const loginData = await loginResponse.json() as {access_token:string, username:string};
		const accessToken = loginData.access_token;
		console.log (jwtDecode(accessToken));

		localStorage.setItem('accessToken', accessToken);
	
		setLoading (false)

	};

	const handleRegister  = async () => {
		setLoading(true);
		await fetch ("https://todos-be.vercel.app/auth/register", {
			method: "POST",
			body: JSON.stringify ({ username, password }),
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
		});
	
		setTimeout(()=>{
			setLoading (false)
		})
	}



	const handleChange = (	
    	_event: React.MouseEvent<HTMLElement>,
    	newAlignment: string,
  	) => {
    setIsloginFormName(newAlignment);
  	};

	return (
		<>
			<AppBar/>
			<ButtonAppBar />
      
			<div style={{marginTop: "100px"}} />
			

			

	{/* <Typography variant='h4' gutterBottom>Login</Typography> */}
	{/* <Typography variant='h4' gutterBottom> Register </Typography> */}
			
	<Container maxWidth={"sm"}>

		<ToggleButtonGroup
		disabled = {loading}
		size='small'
		color="primary"
		value={loginFormName}
		exclusive
		onChange={handleChange}
		aria-label="Platform"
		fullWidth
		sx={{marginBottom:2}}
		>
		<ToggleButton value="login">Login</ToggleButton>
		<ToggleButton value="regisret">Register</ToggleButton>
		</ToggleButtonGroup>


			{loginFormName === "login"
				? (<Stack spacing={2}>
					<TextField
						disabled = {loading}
						value={username}
						onChange={handleUserNameChange}
						size='small'  
						label="email" 
						variant="filled" 
						slotProps={{
          					input: {
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								),
          					},
        				}}
					/>
					<TextField
						value={password} 
						onChange={handlePasswordChange}
						size='small'  
						label="Pasword" 
						type="password"
						variant="filled" 
						slotProps={{
							input: {
								startAdornment: (
									<InputAdornment 
										position="start">
										<AccountCircle />
									</InputAdornment>
								),
							},
						}}
					/>
					<Button 
						onClick = {handeleLogin} 
						variant='contained'
						loadingPosition={"start"} 
						loading={loading}
					>
						{loading ? "Loading" : "Login"}
					</Button> 
				</Stack>)
				:(<Stack spacing={2}>
					<TextField
						disabled = {loading}
						value={username}
						onChange={handleUserNameChange}
						size='small'  
						label="email" 
						variant="filled" 
						slotProps={{
          					input: {
								startAdornment: (
									<InputAdornment position="start">
										<AccountCircle />
									</InputAdornment>
								),
          					},
        				}}
					/>
					<TextField
						value={password} 
						onChange={handlePasswordChange}
						size='small'  
						label="Pasword" 
						type="password"
						variant="filled" 
						slotProps={{
							input: {
								startAdornment: (
									<InputAdornment 
										position="start">
										<AccountCircle />
									</InputAdornment>
								),
							},
						}}
					/>
					<Button 
						onClick = {handleRegister} 
						variant='contained'
						loadingPosition={"start"} 
						loading={loading}
					>
						{loading ? "Loading" : "Register"}
					</Button>
				</Stack>)
			}
	</Container>
	
		</>
	);
}

export default App
