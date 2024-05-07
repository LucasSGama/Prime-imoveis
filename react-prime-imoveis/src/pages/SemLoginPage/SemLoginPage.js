import './SemLoginPage.css'
import imagemTeste from '../../images/Imagem_ultra_prime.jpg';
import { Link } from 'react-router-dom';


export function SemLoginPage() {
    return (
        <main className='SemLoginPage'>
            <div className='ConteudoSemLoginPage'>
                <div className='DivImagem_SemLoginPage'>
                    <img src={imagemTeste} alt='imagem' className='ImagemSemLoginPage'></img>
                </div>
                <div className='DivAviso_SemLoginPage'>
                    <p className='AvisoSemLoginPage'>Você não pode acessar esse página sem efetuar o login</p>
                </div>
                <div className='DivCaminhoTelaLogin'>
                    <Link to='/LogarPage' className='BtnEfetuarLogin'>Efetuar login</Link>
                </div>
            </div>
        </main>
    )
}

export default SemLoginPage;