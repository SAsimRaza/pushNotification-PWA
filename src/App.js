import './App.css';
import firebase from './firebase'
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const msg = firebase.messaging();
    console.log(msg)
    msg.requestPermission().then(() => {
      return msg.getToken();
    }).then((data) => {
      console.warn("token", data );
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h3> This is PWA Push Notification App-Firebase</h3>
      </header>
    </div>
  );
}

export default App;
