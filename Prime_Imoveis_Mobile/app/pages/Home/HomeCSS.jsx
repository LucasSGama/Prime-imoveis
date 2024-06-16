import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#fff', // Cor de fundo da tela
    },
    HomeContainer: {
        display: 'flex',
        alignItems: 'center',
        // borderWidth: 5,
        // borderColor: 'black',
        backgroundColor: '#fff',
        height: '100%',
    },
    BannerImage: {
        width: '95%', // Utilize '100%' para ocupar a largura total do contêiner
        height: 200, // Defina a altura desejada do banner
        marginTop: 5, // Ajuste conforme necessário
        marginBottom: 10, // Ajuste conforme necessário
    },
    HomeText: {
        fontSize: 18,
        marginBottom: 10,
    },
    HomeBlueBar: {
        backgroundColor: '#29A6DE',
        height: 10, // Altura da barra
        width: '100%', // Largura total
        justifyContent: 'center', // Centraliza verticalmente os elementos filhos
        alignItems: 'center', // Centraliza horizontalmente os elementos filhos
        position: 'relative',
    },
    HomeFiltroTitulo: {
        backgroundColor: '#29A6DE',
        borderRadius: 20,
        paddingHorizontal: 20, // Adiciona espaçamento horizontal para tornar o fundo maior que a barra
        paddingVertical: 5, // Adiciona espaçamento vertical
        position: 'absolute',
        zIndex: 1, // Garante que o texto esteja acima da barra
    },
    HomeFiltroTituloTexto: {
        color: 'black',
        fontSize: 17,
        textAlign: 'center',
        fontFamily: 'Poppins_700Bold',
    },
    HomeFiltrosLayout: {
        marginTop: 30,
        width: '95%',
        gap: 20,
    },
    FiltrosLayoutTitulo: {
        fontFamily: 'Poppins_700Bold',
        textAlign: 'center',
        backgroundColor: '#29A6DE',
        padding: 3,
        borderRadius: 10,
    },
    FiltrosInputBox: {
        backgroundColor: '#CFCBCB',
        display: 'flex',
        alignItems: 'center',
        padding: 20,
        borderRadius: 15,
        gap: 20,
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
    },
    FiltrosLayoutBlueBar: {
        height: 10,
        backgroundColor: '#29A6DE',
        borderRadius: 2,
    },

    FiltrosLayoutResultado: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        flexWrap: 'wrap',
    },

});

export default styles;
