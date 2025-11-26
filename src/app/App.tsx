// import { useState } from 'react';
// import Button from '@mui/material/Button';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
 
import './App.css'
import AppBar from '@mui/material/AppBar';
import ButtonAppBar from './AppBar.tsx';
import { Button, Container, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { useState, type SyntheticEvent } from 'react';





function App() {

	const [username, setUsername] = useState ('')
	const [password, setPassword] = useState ('')

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
	

	return (
		<>
			<AppBar/>
			<ButtonAppBar />
      
			<div style={{marginTop: "100px"}} />
			
			<Container maxWidth={"sm"}>
				<Typography variant='h4' gutterBottom>
					{''}
					 Login 
					{''}
					 </Typography>
				<Stack spacing={2}>
					<TextField
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
					<Button variant='contained'>Login</Button>
				</Stack>
			</Container>
		</>
	);
}

export default App
