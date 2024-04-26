import logo from '../../images/f7c62625-a487-4652-95bc-c5f4432cadeb.jpg';
import arrow from "../../images/3cf794fe42cd0b2c6d781e0e0dd6b4bb-removebg-preview.png"
import "./styles.css" 

export function Login() {
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

      <a href="">Esqueceu sua senha?</a>

      <button className="button">
        Se Conectar
      </button>

      <div className="footer">
        <p>Ainda não tem uma conta?</p>
        <a href="#">Crie uma conta</a>
      </div>
    </form>
  </div>
}
