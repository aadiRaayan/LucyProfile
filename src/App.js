import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from "axios";
import NavBar from './components/NavBar';
import LoginCard from './components/LoginCard';
import LoginPage from './components/LoginPage';

// import env from "dotenv";
// env.config();
//const SERVER_URL = process.env.SERVER;
const SERVER_URL = "https://lucyserver2.onrender.com";

let user = {
  id: 0,
  name: '',
};

function App() {

  const [page, setPage] = useState('home');
  // const [isLogin, setIsLogin] = useState(false);
  // const [user, setUser] = useState({ isAuth: false, name: '' });
  const authUser = async function (username) {
    try {
      console.log(username);
      const resp = await axios.get(`${SERVER_URL}/user/${username}`);
      console.log(resp);
      if (resp.data === username) {
        user.name = username;
        setPage('user');      
      } else {
        return -1;
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App">

      {page === 'user' && <LoginPage username={user.name} logOut={() => setPage('home')} />}

      {page === 'login' && <LoginCard authUser={authUser} cancel={() => setPage('home')} />}


      {page === 'home' && (
        <div className='home'>
          <NavBar login={() => setPage('login')} />
          <header className="App-header">
            <p>
              Welcome to Lucy Profile
            </p>
          </header>
        </div>)}

    </div>
  );
}

export default App;