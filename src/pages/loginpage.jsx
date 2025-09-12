import './loginpage.css';

export function Loginpage(){
    return(
        <div className="login-container">
            <h1>Login Page</h1>
            <input type="text" placeholder='Username'/><br/>
            <input type="password" placeholder='Password'/><br/>
            <button>Login</button>
        </div>
    )
}
