import logo from '../../images/Logo-Prime-Prime_Prime.png';
import "./Cadastro" 

export function Cadastro() {
  return <div className="container">
    <header>
      <img src={logo} alt="prime-imoveis" width="240px" />
      <span>Conecte-se a sua conta da prime-imóveis</span>
    </header>

    <form>
      <div className="inputContainer">
        <label htmlFor="email">E-mail</label>
        <input 
        type="text" 
        name="email" 
        id="email" 
        placeholder="digite seu email" 
        />
      </div>
      <div className="inputContainer">
        <label htmlFor="password">Password</label>
        <input 
        type="password" 
        name="password" 
        id="password" 
        placeholder="digite sua senha" 
        />
      </div>

      <button className="button">
        Se Conectar
      </button>

      <div className="footer">
        <p> Você já tem uma conta?</p>
        <a href="#">Acesse sua conta</a>
      </div>
    </form>
  </div>
}

export default Cadastro;