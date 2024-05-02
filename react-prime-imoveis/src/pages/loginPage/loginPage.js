import logo from '../../images/f7c62625-a487-4652-95bc-c5f4432cadeb.jpg';
import './login.css'

export function loginPage() {
  return ( 
    <div className="container">
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
  )
}

export default loginPage;