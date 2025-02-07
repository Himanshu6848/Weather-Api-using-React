import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'
import { Alert } from '@mui/material';
import WeatherApp from './WeatherApp';

function App() {
  return (
    <>
      {/* <h1>Material UI Demo</h1>
      {/* <Button variant="text">CLICK ME!</Button> */}
      {/* <Button variant="outlined">CLICK ME!</Button> */}
      {/* <Button variant="contained" onClick={handleClick}>CLICK ME!</Button>
      <Button variant="contained" onClick={handleClick} disabled>CLICK ME!</Button>
      <Button variant="contained" onClick={handleClick} color="error">CLICK ME!</Button>  color="success" */}
      {/* <Button variant="contained" onClick={handleClick} startIcon={<DeleteIcon/>}>CLICK ME!</Button>
      <Alert severity="error">Delete this item!</Alert>  */}

        <WeatherApp/>
    </>
  )
}

export default App
