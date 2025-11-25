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





function App() {

	return (
		<>
			<AppBar/>
			<ButtonAppBar />
      
			<div style={{marginTop: "100px"}} />
			
			<Container maxWidth={"sm"}>
				<Typography variant='h4' gutterBottom> Login </Typography>
				<Stack spacing={2}>
					<TextField
						onChange={(e)=> console.log(e.target.value)}  
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
