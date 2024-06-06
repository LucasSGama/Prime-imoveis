import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerCadastro: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderWidth: 1, // Largura da borda
        borderColor: 'black', // Cor da borda
    },
    cadastroTopo: {
        borderWidth: 1, // Largura da borda
        borderColor: 'black', // Cor da borda
        display: 'flex',
        padding: '50px',
        alignItems: 'center',
        width: '90%',
    },
    cadastroTopoImagem: {
        borderWidth: 1, // Largura da borda
        borderColor: 'black', // Cor da borda
        width: '50%',
    },
    CadastroImage: {
        borderWidth: 1,
        borderColor: 'black',
        // width: '100%',
    },
    CadastroTopoTitulo: {
        borderWidth: 1,
        borderColor: 'black',
    }
})

export default styles;