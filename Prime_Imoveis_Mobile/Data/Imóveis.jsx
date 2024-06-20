import Apartamento_No_Centro from './Foto_Imóveis/Apartamento_No_Centro.jpeg';
import Casa_De_Campo from './Foto_Imóveis/Casa_De_Campo.jpeg';
import Casa_Na_Praia from './Foto_Imóveis/Casa_Na_Praia.jpeg';
import Chacara_No_Interior from './Foto_Imóveis/Chacara_No_Interior.jpeg';
import Cobertura_No_Litoral from './Foto_Imóveis/Cobertura_No_Litoral.jpeg';
import Fazenda_De_Campo from './Foto_Imóveis/Fazenda_De_Campo.jpeg';
import Kitnet_Na_Cidade from './Foto_Imóveis/Kitnet_Na_Cidade.jpeg';
import Loft_Na_Praça from './Foto_Imóveis/Loft_Na_Praça.jpeg';
import Pousada_Na_Floresta from './Foto_Imóveis/Pousada_Na_Floresta.jpeg';
import Sobrado_Na_Montanha from './Foto_Imóveis/Sobrado_Na_Montanha.jpeg';

const imoveis = [
  {
    link: "#",
    imagem: Casa_Na_Praia,
    nome: "Casa na Praia",
    descricao: "Casa espaçosa à beira-mar com vista panorâmica.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "MG", // Minas Gerais
  },
  {
    link: "#",
    imagem: Apartamento_No_Centro,
    nome: "Apartamento no Centro",
    descricao: "Apartamento moderno no coração da cidade.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "MG", // Minas Gerais
  },
  {
    link: "#",
    imagem: Chacara_No_Interior,
    nome: "Chácara no Interior",
    descricao: "Chácara com piscina e área de lazer em meio à natureza.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "AC", // Acre
  },
  {
    link: "#",
    imagem: Sobrado_Na_Montanha,
    nome: "Sobrado na Montanha",
    descricao: "Sobrado aconchegante com vista para as montanhas.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "AC", // Acre
  },
  {
    link: "#",
    imagem: Cobertura_No_Litoral,
    nome: "Cobertura no Litoral",
    descricao: "Cobertura luxuosa com vista para o mar.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "BA", // Bahia
  },
  {
    link: "#",
    imagem: Fazenda_De_Campo,
    nome: "Fazenda de Campo",
    descricao: "Fazenda com vasta área verde e infraestrutura completa.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Bairro",
    Estado: "BA", // Bahia
  },
  {
    link: "#",
    imagem: Kitnet_Na_Cidade,
    nome: "Kitnet na Cidade",
    descricao: "Kitnet compacta e funcional no centro da cidade.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Condomínio",
    Estado: "SE", // Sergipe
  },
  {
    link: "#",
    imagem: Pousada_Na_Floresta,
    nome: "Pousada na Floresta",
    descricao: "Pousada charmosa cercada pela natureza.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Bairro",
    Estado: "SE", // Sergipe
  },
  {
    link: "#",
    imagem: Loft_Na_Praça,
    nome: "Loft na Praça",
    descricao: "Loft moderno com vista para uma praça movimentada.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Condomínio",
    Estado: "AL", // Alagoas
  },
  {
    link: "#",
    imagem: Casa_De_Campo,
    nome: "Casa de Campo",
    descricao: "Casa rústica com amplo jardim e área de lazer.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Bairro",
    Estado: "AL", // Alagoas
  },
  {
    link: "#",
    imagem: Apartamento_No_Centro,
    nome: "Apartamento Executivo",
    descricao: "Apartamento elegante para executivos, próximo aos centros comerciais.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Condomínio",
    Estado: "SP", // São Paulo
  },
  {
    link: "#",
    imagem: Casa_De_Campo,
    nome: "Casa Tranquila",
    descricao: "Casa espaçosa e tranquila para quem busca sossego.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "RJ", // Rio de Janeiro
  },
  {
    link: "#",
    imagem: Casa_Na_Praia,
    nome: "Casa de Veraneio",
    descricao: "Casa charmosa à beira-mar, perfeita para férias em família.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "RN", // Rio Grande do Norte
  },
  {
    link: "#",
    imagem: Chacara_No_Interior,
    nome: "Chácara com Vista",
    descricao: "Chácara ampla com vista panorâmica das montanhas.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "GO", // Goiás
  },
  {
    link: "#",
    imagem: Sobrado_Na_Montanha,
    nome: "Casa nas Montanhas",
    descricao: "Casa encantadora com vista deslumbrante das montanhas.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "SC", // Santa Catarina
  },
  {
    link: "#",
    imagem: Cobertura_No_Litoral,
    nome: "Cobertura Frente ao Mar",
    descricao: "Cobertura luxuosa de frente para o mar, com vistas deslumbrantes.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Condomínio",
    Estado: "ES", // Espírito Santo
  },
  {
    link: "#",
    imagem: Fazenda_De_Campo,
    nome: "Fazenda Produtiva",
    descricao: "Fazenda com infraestrutura para agricultura e pecuária.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "MT", // Mato Grosso
  },
  {
    link: "#",
    imagem: Kitnet_Na_Cidade,
    nome: "Kitnet Funcional",
    descricao: "Kitnet prática e funcional para solteiros ou estudantes.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "DF", // Distrito Federal
  },
  {
    link: "#",
    imagem: Pousada_Na_Floresta,
    nome: "Pousada Ecológica",
    descricao: "Pousada sustentável em meio à natureza preservada.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "PA", // Pará
  },
  {
    link: "#",
    imagem: Loft_Na_Praça,
    nome: "Loft Urbano",
    descricao: "Loft moderno em região urbana movimentada.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "PE", // Pernambuco
  },
  {
    link: "#",
    imagem: Apartamento_No_Centro,
    nome: "Apartamento Moderno",
    descricao: "Apartamento recém-reformado com design contemporâneo.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Condomínio",
    Estado: "RJ", // Rio de Janeiro
  },
  {
    link: "#",
    imagem: Casa_De_Campo,
    nome: "Casa de Campo Luxuosa",
    descricao: "Casa de campo com estilo sofisticado e área de lazer completa.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "SP", // São Paulo
  },
  {
    link: "#",
    imagem: Casa_Na_Praia,
    nome: "Casa na Praia dos Sonhos",
    descricao: "Casa ampla e confortável com acesso direto à praia.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "BA", // Bahia
  },
  {
    link: "#",
    imagem: Chacara_No_Interior,
    nome: "Chácara de Luxo",
    descricao: "Chácara com arquitetura moderna e vista panorâmica da serra.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "GO", // Goiás
  },
  {
    link: "#",
    imagem: Sobrado_Na_Montanha,
    nome: "Refúgio nas Montanhas",
    descricao: "Sobrado com estilo alpino e ambiente tranquilo para relaxar.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "SC", // Santa Catarina
  },
  {
    link: "#",
    imagem: Cobertura_No_Litoral,
    nome: "Cobertura de Luxo",
    descricao: "Cobertura elegante com vista panorâmica para o mar.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Condomínio",
    Estado: "ES", // Espírito Santo
  },
  {
    link: "#",
    imagem: Fazenda_De_Campo,
    nome: "Fazenda Produtiva",
    descricao: "Fazenda com infraestrutura para agricultura e pecuária.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "MT", // Mato Grosso
  },
  {
    link: "#",
    imagem: Kitnet_Na_Cidade,
    nome: "Kitnet Compacto",
    descricao: "Kitnet funcional e bem localizado no centro da cidade.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "DF", // Distrito Federal
  },
  {
    link: "#",
    imagem: Pousada_Na_Floresta,
    nome: "Pousada Ecológica",
    descricao: "Pousada sustentável em meio à natureza preservada.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "PA", // Pará
  },
  {
    link: "#",
    imagem: Loft_Na_Praça,
    nome: "Loft na Praça Movimentada",
    descricao: "Loft moderno com vista para uma praça central e movimentada.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "PE", // Pernambuco
  },
  {
    link: "#",
    imagem: Apartamento_No_Centro,
    nome: "Apartamento de Alto Padrão",
    descricao: "Apartamento luxuoso no coração financeiro da cidade.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Condomínio",
    Estado: "SP", // São Paulo
  },
  {
    link: "#",
    imagem: Casa_De_Campo,
    nome: "Casa Rústica",
    descricao: "Casa rústica com características tradicionais e ambiente acolhedor.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "RS", // Rio Grande do Sul
  },
  {
    link: "#",
    imagem: Casa_Na_Praia,
    nome: "Casa de Veraneio",
    descricao: "Casa charmosa à beira-mar, ideal para férias em família.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "CE", // Ceará
  },
  {
    link: "#",
    imagem: Chacara_No_Interior,
    nome: "Chácara Tranquila",
    descricao: "Chácara com ambiente tranquilo e área de lazer completa.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "MT", // Mato Grosso
  },
  {
    link: "#",
    imagem: Sobrado_Na_Montanha,
    nome: "Sobrado Aconchegante",
    descricao: "Sobrado com design aconchegante e vista para as montanhas.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "PR", // Paraná
  },
  {
    link: "#",
    imagem: Cobertura_No_Litoral,
    nome: "Cobertura Frente ao Mar",
    descricao: "Cobertura de alto padrão com vista deslumbrante para o mar.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Condomínio",
    Estado: "RJ", // Rio de Janeiro
  },
  {
    link: "#",
    imagem: Fazenda_De_Campo,
    nome: "Fazenda com Infraestrutura",
    descricao: "Fazenda preparada para produção agrícola e criação de gado.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "MS", // Mato Grosso do Sul
  },
  {
    link: "#",
    imagem: Kitnet_Na_Cidade,
    nome: "Kitnet no Centro Histórico",
    descricao: "Kitnet compacto em prédio histórico no centro da cidade.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "PE", // Pernambuco
  },
  {
    link: "#",
    imagem: Pousada_Na_Floresta,
    nome: "Pousada Romântica",
    descricao: "Pousada com atmosfera romântica e paisagem natural exuberante.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "SC", // Santa Catarina
  },
  {
    link: "#",
    imagem: Loft_Na_Praça,
    nome: "Loft Urbano",
    descricao: "Loft moderno e urbano em localização estratégica na cidade.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "BA", // Bahia
  },
  {
    link: "#",
    imagem: Casa_De_Campo,
    nome: "Mansão de Luxo",
    descricao: "Mansão exclusiva com vista panorâmica e decoração elegante.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Condomínio",
    Estado: "SP", // São Paulo
  },
  {
    link: "#",
    imagem: Apartamento_No_Centro,
    nome: "Apartamento Executivo",
    descricao: "Apartamento sofisticado próximo aos principais centros comerciais.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Condomínio",
    Estado: "RJ", // Rio de Janeiro
  },
  {
    link: "#",
    imagem: Casa_Na_Praia,
    nome: "Casa Tropical",
    descricao: "Casa espaçosa com jardim tropical e acesso direto à praia.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "BA", // Bahia
  },
  {
    link: "#",
    imagem: Chacara_No_Interior,
    nome: "Chácara com Vista Panorâmica",
    descricao: "Chácara ampla com vista deslumbrante das montanhas.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "MG", // Minas Gerais
  },
  {
    link: "#",
    imagem: Sobrado_Na_Montanha,
    nome: "Refúgio na Serra",
    descricao: "Sobrado charmoso com ambiente tranquilo e vista para a serra.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "SC", // Santa Catarina
  },
  {
    link: "#",
    imagem: Cobertura_No_Litoral,
    nome: "Cobertura à Beira-Mar",
    descricao: "Cobertura luxuosa com terraço panorâmico e acesso direto à praia.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Condomínio",
    Estado: "RJ", // Rio de Janeiro
  },
  {
    link: "#",
    imagem: Fazenda_De_Campo,
    nome: "Fazenda Produtiva",
    descricao: "Fazenda com infraestrutura para agricultura e pecuária.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "MT", // Mato Grosso
  },
  {
    link: "#",
    imagem: Kitnet_Na_Cidade,
    nome: "Kitnet no Centro Histórico",
    descricao: "Kitnet compacto em prédio histórico no centro da cidade.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "SP", // São Paulo
  },
  {
    link: "#",
    imagem: Pousada_Na_Floresta,
    nome: "Pousada Ecológica",
    descricao: "Pousada sustentável em meio à natureza preservada.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "AM", // Amazonas
  },
  {
    link: "#",
    imagem: Loft_Na_Praça,
    nome: "Loft Urbano",
    descricao: "Loft moderno em localização estratégica e ambiente urbano.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "SP", // São Paulo
  },
  {
    link: "#",
    imagem: Casa_De_Campo,
    nome: "Casa Rústica",
    descricao: "Casa rústica com estilo campestre e jardim amplo.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "RS", // Rio Grande do Sul
  },
  {
    link: "#",
    imagem: Casa_Na_Praia,
    nome: "Casa de Veraneio",
    descricao: "Casa charmosa à beira-mar, ideal para férias em família.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "CE", // Ceará
  },
  {
    link: "#",
    imagem: Chacara_No_Interior,
    nome: "Chácara Tranquila",
    descricao: "Chácara com ambiente tranquilo e área de lazer completa.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "MT", // Mato Grosso
  },
  {
    link: "#",
    imagem: Sobrado_Na_Montanha,
    nome: "Sobrado Aconchegante",
    descricao: "Sobrado com design aconchegante e vista para as montanhas.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "PR", // Paraná
  },
  {
    link: "#",
    imagem: Cobertura_No_Litoral,
    nome: "Cobertura Frente ao Mar",
    descricao: "Cobertura de alto padrão com vista deslumbrante para o mar.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Condomínio",
    Estado: "RJ", // Rio de Janeiro
  },
  {
    link: "#",
    imagem: Fazenda_De_Campo,
    nome: "Fazenda com Infraestrutura",
    descricao: "Fazenda preparada para produção agrícola e criação de gado.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "MS", // Mato Grosso do Sul
  },
  {
    link: "#",
    imagem: Kitnet_Na_Cidade,
    nome: "Kitnet Compacto",
    descricao: "Kitnet funcional e bem localizado no centro da cidade.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "DF", // Distrito Federal
  },
  {
    link: "#",
    imagem: Pousada_Na_Floresta,
    nome: "Pousada Romântica",
    descricao: "Pousada com atmosfera romântica e paisagem natural exuberante.",
    Tipo_De_Compra: "Compra",
    Tipo_de_Residencia: "Bairro",
    Estado: "SC", // Santa Catarina
  },
  {
    link: "#",
    imagem: Loft_Na_Praça,
    nome: "Loft na Praça Movimentada",
    descricao: "Loft moderno com vista para uma praça central e movimentada.",
    Tipo_De_Compra: "Aluguel",
    Tipo_de_Residencia: "Condomínio",
    Estado: "BA", // Bahia
  },
];

export default imoveis;
