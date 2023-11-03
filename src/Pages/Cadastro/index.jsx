import React from "react";

function Cadastro() {
  return (
    <>	
	 <form>
		<label for="chk" aria-hidden="true">Criar conta</label>
		<input type="text" name="txt" placeholder="User name" required=""/>
		<input type="email" name="email" placeholder="Email" required=""/>
		<input type="password" name="pswd" placeholder="Password" required=""/>
		<button>Cadastrar</button>
	 </form>

    </>
  ); 
}

export default Cadastro;
