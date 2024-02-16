import './LoginPage.css'

const LoginPage = function ({ userId,username,logOut }) {

    return (
        <div className='PageContainer'>
            <p>Welcome {username} !</p>
            <button onClick={logOut}>LogOut</button>
        </div>
    );
}

export default LoginPage;