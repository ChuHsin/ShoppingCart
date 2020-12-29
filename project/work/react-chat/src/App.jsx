import React, {useState} from 'react';
import './App.css';
import Messages from './Messages';
import ErrorMessage from './ErrorMessage';

function App() {
  const [loginStatus, setLoginStatus] = useState('NO');
  const [errorMessage, setErrorMessage ] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Messages 
          loginStatus={loginStatus} setLoginStatus={(loginStatus) => {setLoginStatus(loginStatus)}}
          errorMessage={errorMessage} setErrorMessage={(errorMessage) => {setErrorMessage(errorMessage)}} 
          />
          <ErrorMessage errorMessage={errorMessage} setErrorMessage={(errorMessage) => {setErrorMessage(errorMessage)}}/>
        </div>
      </header>
    </div>
  );
}

export default App;
