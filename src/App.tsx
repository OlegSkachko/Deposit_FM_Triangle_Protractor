import React, { useState } from 'react';
import InputAngles from './components/InputAngles/InputAngles';
import Protractor from './components/Protractor/Protractor';
import Result from './components/Result/Result';
import Triangle from './components/Triangle/Triangle';
import './App.css';


function App() {
  const [redo, setRedo] = useState<boolean>(false)
  const [angleABC, setAngleABC] = useState<string>('')
  const [angleBAC, setAngleBAC] = useState<string>('')
  const [angleBCA, setAngleBCA] = useState<string>('')

  function getAngleABC(e:React.ChangeEvent<HTMLInputElement>) {
    setAngleABC(e.target.value)
  }

  function getAngleBAC(e:React.ChangeEvent<HTMLInputElement>) {
    setAngleBAC(e.target.value)
  }

  function getAngleBCA(e:React.ChangeEvent<HTMLInputElement>) {
    setAngleBCA(e.target.value)
  }

  function submitResult () {
    setRedo(true)
  }

  function hideResult() {
    setRedo(false)
  }

  return (
    <>
    {redo && 
      <Result 
        resultAngleABC={angleABC}
        resultAngleBAC={angleBAC}
        resultAngleBCA={angleBCA}
        onClick={hideResult}
      />
    }
    <div className="App">
      <div className="App__main">
       <span className='App__text'>
          Measure the angles of a triangle using a protractor
       </span>
        <Triangle/>
        <InputAngles 
          resultAngleABC={getAngleABC}
          resultAngleBAC={getAngleBAC}
          resultAngleBCA={getAngleBCA}
        />
        <Protractor/>
      </div>
      <button className='App__btn' onClick={submitResult}>Submit</button>
    </div>
    </> 
  );
}

export default App;
