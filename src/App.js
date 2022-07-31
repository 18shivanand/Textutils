
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const[alert, setalert] = useState(null);

 function showalert(message, type)
 {
    setalert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(()=>{
      setalert(null);
    }, 2000)
   
 }
  function Mode()
  {
    console.log("added the:".mode);
        if(mode === 'light')
          setMode('dark');

        else
          setMode('light')  ;
  }
  return (
    <>
    {/* <Router> */}
    <Navbar
    title="TextUtils"
    about = "About developer"
    mode={ mode }
    toggleMode={Mode}
    />
   <Alert alert={alert} />

    {/* <Switch> */}
          {/* <Route exact path="/about" element={<About />}>
          <div className='container my-2'>
          <About/>
          </div> */}
          {/* </Route> */}
          {/* <Route exact path="/"  element={<About />}> */}

          <TextForm showalert={showalert}/>
          {/* </Route>
    </Switch>
    </Router> */}
    </>
  );
}

export default App;
