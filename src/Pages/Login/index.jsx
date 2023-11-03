import React from "react";
import './style.css'
import Cadastro from "../Cadastro";

function Login() {
  return (
    <>
    <div className="login-container">
    <div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<Cadastro/>
			</div>

			<div className="login">
				<form>
					<label for="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Login</button>
				</form>
			</div>
	</div>
    </div>
    </>
  ); 
}

export default Login;
