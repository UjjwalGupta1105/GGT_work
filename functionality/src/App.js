import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [popUp,setPopUp]=useState(false)

  const handleClick=()=>{
    setPopUp(!popUp);
  }

  return (
   <>
    <div className='cont'>
     {popUp && <div className='box'>
     <button className='cancel' onClick={handleClick}>X</button>
        <h2>Game</h2>
      </div>}
      <div>
        <button className='gamebutton' onClick={handleClick}>Play Game</button>
      </div>
    </div>

   </>
  );
}

export default App;
