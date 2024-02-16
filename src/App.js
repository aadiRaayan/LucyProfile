import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from "axios";

// import env from "dotenv";
// env.config();
//const SERVER_URL = process.env.SERVER;
const SERVER_URL = "https://lucyserver2.onrender.com";



function App() {
  const [msg, setMsg] = useState("");
  const updMsg = (e) => setMsg(e.target.value);
  console.log(SERVER_URL);
  const getJoke = async function(){
    try {
      const response = await axios.get(`${SERVER_URL}/user`,msg);
      console.log(response.data);
      setMsg(response.data)
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Lucy Profile
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getJoke}>Get a Joke</button>
        <h3>{msg}</h3>    
      </header>
    </div>
  );
}

export default App;

//         <input type='text' name='msg' placeholder='Enter Message' value={msg} onChange={updMsg}/>