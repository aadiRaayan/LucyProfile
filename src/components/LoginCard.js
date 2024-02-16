import './LoginCard.css';
import { useState } from 'react';

const LoginCard = function ({ authUser, cancel }) {
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState('');
    const updUserInput = (e) => setUserInput(e.target.value);
    const submitUser = function () {
        console.log('in submit user');
        const resp = authUser(userInput);
        if (authUser(userInput) === -1) {
            setError('Invalid Username')
        }
    }

    return (
        <div className='container'>
            <div className='card'>
                <a className='closeIcon'>*</a>
                <p>Sign in</p>
                <input className='loginInput' type='text' placeholder='Username or Phone' autoFocus={true} value={userInput} onChange={updUserInput} />
                {error.length > 0 && <p>{error}</p>}
                <button className='loginButton' onClick={submitUser}>Sign in</button>
                <button onClick={cancel}>Cancel</button>
            </div>
        </div>
    );
}

export default LoginCard;