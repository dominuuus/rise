// Dados dos arquivos fornecidos
const animalsData = [
    { name: "Onça-pintada", natural: ["Amazônia", "Pantanal", "Caatinga", "Cerrado", "Mata Atlântica"], incompatible: ["Tundra", "Deserto", "Pampa", "Savana"], image: "assets/animais/onca-pintada.png" },
    { name: "Bicho-preguiça", natural: ["Amazônia", "Pantanal", "Caatinga", "Cerrado", "Mata Atlântica"], incompatible: ["Caatinga", "Cerrado", "Deserto", "Tundra"], image: "assets/animais/bicho-preguica.jpg" },
    { name: "Arara-azul", natural: ["Amazônia", "Cerrado", "Pantanal"], incompatible: ["Tundra", "Deserto", "Savana"], image: "assets/animais/arara-azul.jpg" },
    { name: "Jacaré-açu", natural: ["Amazônia"], incompatible: ["Deserto", "Tundra", "Pampa"], image: "assets/animais/jacare-acu.webp" },
    { name: "Mico-leão-dourado", natural: ["Mata Atlântica"], incompatible: ["Caatinga", "Deserto", "Pampa", "Tundra"], image: "assets/animais/mico-leao-dourado.jpg" },
    { name: "Tamanduá-bandeira", natural: ["Cerrado", "Amazônia", "Caatinga", "Pantanal", "Mata Atlântica"], incompatible: ["Tundra", "Deserto"], image: "assets/animais/tamandua-bandeira.jpg" },
    { name: "Capivara", natural: ["Pantanal", "Amazônia", "Mata Atlântica", "Cerrado", "Pampa"], incompatible: ["Deserto", "Tundra"], image: "assets/animais/capivara.jpg" },
    { name: "Tuiuiú", natural: ["Pantanal"], incompatible: ["Deserto", "Tundra", "Amazônia", "Mata Atlântica"], image: "assets/animais/tuiuiu.jpg" },
    { name: "Lobo-guará", natural: ["Cerrado"], incompatible: ["Tundra", "Amazônia", "Mata Atlântica"], image: "assets/animais/logo-guara.jpg" },
    { name: "Macaco bugio", natural: ["Amazônia", "Mata Atlântica", "Cerrado", "Pantanal"], incompatible: ["Tundra", "Deserto", "Caatinga"], image: "assets/animais/macaco-bugio.jpg" },
    { name: "Jacaré-do-pantanal", natural: ["Pantanal"], incompatible: ["Tundra", "Deserto", "Cerrado"], image: "assets/animais/jacare-do-pantanal.jpg" },
    { name: "Camelo", natural: ["Deserto"], incompatible: ["Amazônia", "Pantanal"], image: "assets/animais/camelo.jpg" },
    { name: "Urso-polar", natural: ["Tundra"], incompatible: ["Amazônia", "Cerrado", "Savana"], image: "assets/animais/urso-polar.jpg" },
    { name: "Raposa-do-ártico", natural: ["Tundra"], incompatible: ["Pantanal", "Caatinga", "Amazônia"], image: "assets/animais/raposa-do-artico.jpg" },
    { name: "Girafa", natural: ["Savana"], incompatible: ["Mata Atlântica", "Amazônia", "Tundra"], image: "assets/animais/girafa.jpg" },
    { name: "Elefante Africano", natural: ["Savana"], incompatible: ["Amazônia", "Mata Atlântica", "Tundra"], image: "assets/animais/elefante-africano.jpg" },
    { name: "Tamanduá-mirim", natural: ["Caatinga", "Amazônia", "Mata Atlântica", "Cerrado"], incompatible: ["Tundra", "Deserto"], image: "assets/animais/tamandua-mirim.jpg" },
    { name: "Pica-pau-rei", natural: ["Floresta com Araucárias", "Mata Atlântica", "Cerrado"], incompatible: ["Deserto", "Tundra"], image: "assets/animais/pica-pau-rei.jpg" },
    { name: "Teiú", natural: ["Caatinga", "Cerrado", "Mata Atlântica", "Cerrado", "Pantanal"], incompatible: ["Tundra", "Pampa"], image: "assets/animais/teiu.jpg" },
    { name: "Feneco", natural: ["Deserto"], incompatible: ["Amazônia", "Pantanal", "Mata Atlântica"], image: "assets/animais/fennec.jpg" },
    { name: "Anta", natural: ["Mata Atlântica", "Amazônia", "Cerrado", "Pantanal"], incompatible: ["Deserto", "Tundra"], image: "assets/animais/anta.jpg" },
    { name: "Gralha-azul", natural: ["Floresta com Araucárias", "Mata Atlântica"], incompatible: ["Deserto", "Tundra"], image: "assets/animais/gralha-azul.jpg" },
    { name: "Hiena", natural: ["Savana"], incompatible: ["Pantanal", "Tundra", "Amazônia"], image: "assets/animais/hiena.jpg" },
    { name: "Seriema", natural: ["Cerrado"], incompatible: ["Amazônia", "Mata Atlântica", "Tundra"], image: "assets/animais/seriema.jpg" },
    { name: "Coruja-das-neves", natural: ["Tundra"], incompatible: ["Amazônia", "Pantanal"], image: "assets/animais/coruja-das-neves.jpg" },
    { name: "Tatu-bola", natural: ["Mata Atlântica", "Caatinga", "Cerrado"], incompatible: ["Tundra", "Deserto", "Amazônia", "Pantanal"], image: "assets/animais/tatu-bola.jpg" },
    { name: "Preguiça-de-coleira", natural: ["Mata Atlântica"], incompatible: ["Tundra", "Deserto", "Pampa", "Caatinga", "Savana"], image: "assets/animais/preguica-de-coleira.jpg" },
    { name: "Cachorro-vinagre", natural: ["Caatinga", "Cerrado", "Pantanal"], incompatible: ["Tundra", "Deserto", "Amazônia", "Mata Atlântica"], image: "assets/animais/cachorro-vinagre.jpg" },
    { name: "Jiboia", natural: ["Caatinga", "Cerrado", "Mata Atlântica", "Amazônia"], incompatible: ["Tundra", "Deserto", "Pampa"], image: "assets/animais/jiboia.jpg" },
    { name: "Cutia", natural: ["Caatinga", "Mata Atlântica", "Cerrado", "Amazônia"], incompatible: ["Tundra", "Deserto", "Savana"], image: "assets/animais/cutia.jpg" },
    { name: "Veado-campeiro", natural: ["Pampa", "Pantanal", "Cerrado", "Caatinga"], incompatible: ["Tundra", "Deserto", "Amazônia", "Mata Atlântica"], image: "assets/animais/veado-campeiro.jpg" },
    { name: "Ema", natural: ["Pampa", "Cerrado"], incompatible: ["Tundra", "Deserto", "Amazônia", "Mata Atlântica"], image: "assets/animais/ema.jpg" },
    { name: "Gambá-de-orelha-branca", natural: ["Pampa", "Mata Atlântica", "Caatinga", "Cerrado"], incompatible: ["Tundra", "Deserto", "Savana"], image: "assets/animais/gamba-de-orelha-branca.jpg" },
    { name: "Quati", natural: ["Floresta com Araucárias", "Mata Atlântica", "Cerrado"], incompatible: ["Tundra", "Deserto", "Caatinga", "Savana"], image: "assets/animais/quati.jpg" },
    { name: "Ouriço-cacheiro", natural: ["Floresta com Araucárias", "Mata Atlântica"], incompatible: ["Tundra", "Deserto", "Pampa", "Caatinga"], image: "assets/animais/ourico-cacheiro.jpg" },
    { name: "Cobra-cascavel", natural: ["Deserto", "Caatinga", "Cerrado"], incompatible: ["Amazônia", "Pantanal", "Tundra", "Mata Atlântica"], image: "assets/animais/cobra-cascavel.jpg" },
    { name: "Lagarto-iguana", natural: ["Deserto", "Amazônia", "Pantanal", "Caatinga", "Mata Atlântica"], incompatible: ["Amazônia", "Pantanal", "Tundra", "Mata Atlântica"], image: "assets/animais/lagarto-iguana.jpg" },
    { name: "Coruja-buraqueira", natural: ["Deserto", "Pampa"], incompatible: ["Amazônia", "Tundra", "Pantanal"], image: "assets/animais/coruja-buraqueira.jpg" },
    { name: "Rena", natural: ["Tundra"], incompatible: ["Amazônia", "Pantanal", "Deserto", "Mata Atlântica"], image: "assets/animais/rena.jpg" },
    { name: "Lobo-ártico", natural: ["Tundra"], incompatible: ["Amazônia", "Deserto", "Caatinga", "Savana"], image: "assets/animais/lobo-artico.jpg" },
    { name: "Leão", natural: ["Savana"], incompatible: ["Tundra", "Amazônia", "Mata Atlântica", "Pantanal"], image: "assets/animais/leao.jpg" },
    { name: "Zebra", natural: ["Savana"], incompatible: ["Tundra", "Amazônia", "Mata Atlântica", "Deserto"], image: "assets/animais/zebra.jpg" },
    { name: "Rinoceronte", natural: ["Savana"], incompatible: ["Tundra", "Amazônia", "Pantanal", "Mata Atlântica"], image: "assets/animais/rinoceronte.jpg" },
    { name: "Guepardo", natural: ["Savana"], incompatible: ["Tundra", "Amazônia", "Deserto", "Mata Atlântica"], image: "assets/animais/guepardo.jpg" }
];

const plantsData = [
    { name: "Castanheira-do-pará", natural: ["Amazônia"], incompatible: ["Deserto", "Tundra", "Caatinga"], image: "assets/plantas/castanheira-do-para.jpg" },
    { name: "Buriti", natural: ["Pantanal", "Amazônia"], incompatible: ["Deserto", "Tundra", "Pampa"], image: "assets/plantas/buriti.jpg" },
    { name: "Ipê-amarelo", natural: ["Cerrado", "Mata Atlântica"], incompatible: ["Tundra", "Deserto"], image: "assets/plantas/ype-amarelo.jpeg" },
    { name: "Cacto mandacaru", natural: ["Caatinga"], incompatible: ["Amazônia", "Pantanal"], image: "assets/plantas/cactu-mandacaru.jpg" },
    { name: "Araucária", natural: ["Floresta com Araucárias"], incompatible: ["Deserto", "Caatinga", "Amazônia"], image: "assets/plantas/araucaria.jpg" },
    { name: "Vitória-régia", natural: ["Amazônia"], incompatible: ["Cerrado", "Caatinga", "Tundra"], image: "assets/plantas/vitoria-regia.jpg" },
    { name: "Carnaúba", natural: ["Caatinga", "Cerrado"], incompatible: ["Tundra", "Amazônia", "Mata Atlântica"], image: "assets/plantas/carnauba.jpg" },
    { name: "Jatobá", natural: ["Cerrado", "Mata Atlântica"], incompatible: ["Deserto", "Tundra"], image: "assets/plantas/jatoba.jpg" },
    { name: "Jacarandá", natural: ["Mata Atlântica"], incompatible: ["Deserto", "Tundra"], image: "assets/plantas/jacaranda.jpg" },
    { name: "Palmeira-açaí", natural: ["Amazônia"], incompatible: ["Caatinga", "Tundra", "Deserto"], image: "assets/plantas/palmeira-acai.jpg" },
    { name: "Bromélia", natural: ["Mata Atlântica"], incompatible: ["Tundra", "Deserto"], image: "assets/plantas/bromelia.jpg" },
    { name: "Bambu-gigante", natural: ["Mata Atlântica", "Floresta com Araucárias"], incompatible: ["Caatinga", "Tundra", "Deserto"], image: "assets/plantas/bambu-gigante.jpg" },
    { name: "Suculenta orelha-de-elefante", natural: ["Deserto"], incompatible: ["Amazônia", "Pantanal"], image: "assets/plantas/orelha-de-elefante.jpg" },
    { name: "Erva-mate", natural: ["Floresta com Araucárias"], incompatible: ["Deserto", "Caatinga"], image: "assets/plantas/erva-mate.jpg" },
    { name: "Capim-dourado", natural: ["Cerrado"], incompatible: ["Tundra", "Amazônia"], image: "assets/plantas/capim-dourado.jpg" },
    { name: "Samambaia", natural: ["Mata Atlântica", "Amazônia"], incompatible: ["Caatinga", "Deserto", "Tundra"], image: "assets/plantas/samambaia.jpg" },
    { name: "Moringa", natural: ["Caatinga"], incompatible: ["Tundra", "Pantanal"], image: "assets/plantas/moringa.jpg" },
    { name: "Cedro", natural: ["Mata Atlântica", "Amazônia"], incompatible: ["Tundra", "Caatinga", "Deserto"], image: "assets/plantas/cedro.jpg" },
    { name: "Cajueiro", natural: ["Caatinga", "Cerrado"], incompatible: ["Tundra", "Amazônia", "Mata Atlântica"], image: "assets/plantas/cajueiro.jpg" },
    { name: "Baobá", natural: ["Savana"], incompatible: ["Tundra", "Amazônia", "Mata Atlântica"], image: "assets/plantas/baoba.jpg" },
    { name: "Capim-pampa", natural: ["Pampa"], incompatible: ["Amazônia", "Pantanal", "Tundra", "Deserto"], image: "assets/plantas/capim-pampa.jpg" },
    { name: "Erva-de-passarinho", natural: ["Pampa", "Mata Atlântica"], incompatible: ["Tundra", "Deserto", "Amazônia"], image: "assets/plantas/erva-de-passarinho.jpg" },
    { name: "Butiá", natural: ["Pampa", "Floresta com Araucárias"], incompatible: ["Tundra", "Deserto", "Caatinga"], image: "assets/plantas/butia.jpg" },
    { name: "Marcela", natural: ["Pampa", "Cerrado"], incompatible: ["Tundra", "Amazônia", "Pantanal"], image: "assets/plantas/marcela.jpg" },
    { name: "Aguapé", natural: ["Pantanal", "Amazônia"], incompatible: ["Deserto", "Tundra", "Caatinga"], image: "assets/plantas/aguape.jpg" },
    { name: "Tabebuia", natural: ["Pantanal", "Cerrado"], incompatible: ["Tundra", "Deserto", "Savana"], image: "assets/plantas/tabebuia.jpg" },
    { name: "Piri", natural: ["Pantanal", "Pampa"], incompatible: ["Tundra", "Deserto", "Mata Atlântica"], image: "assets/plantas/piri.jpg" },
    { name: "Jojoba", natural: ["Deserto"], incompatible: ["Amazônia", "Pantanal", "Tundra", "Mata Atlântica"], image: "assets/plantas/jojoba.jpg" },
    { name: "Tamarisco", natural: ["Deserto", "Caatinga"], incompatible: ["Amazônia", "Pantanal", "Tundra"], image: "assets/plantas/tamarisco.jpg" },
    { name: "Agave", natural: ["Deserto"], incompatible: ["Amazônia", "Pantanal", "Tundra", "Floresta com Araucárias"], image: "assets/plantas/agave.jpg" },
    { name: "Salgueiro-ártico", natural: ["Tundra"], incompatible: ["Amazônia", "Deserto", "Caatinga", "Savana"], image: "assets/plantas/salgueiro-artico.jpg" },
    { name: "Liquen", natural: ["Tundra"], incompatible: ["Amazônia", "Deserto", "Pantanal", "Mata Atlântica"], image: "assets/plantas/liquen-de-rena.jpg" },
    { name: "Saxifraga", natural: ["Tundra"], incompatible: ["Amazônia", "Deserto", "Caatinga", "Savana"], image: "assets/plantas/saxifraga.jpg" },
    { name: "Musgo-de-turfa", natural: ["Tundra"], incompatible: ["Amazônia", "Deserto", "Pantanal", "Cerrado"], image: "assets/plantas/musgo-de-turfa.jpg" },
    { name: "Acácia", natural: ["Savana"], incompatible: ["Tundra", "Amazônia", "Mata Atlântica", "Pantanal"], image: "assets/plantas/acacia.jpg" },
    { name: "Capim-elefante", natural: ["Savana", "Pampa"], incompatible: ["Tundra", "Amazônia", "Deserto"], image: "assets/plantas/capim-elefante.jpg" },
    { name: "Combretum", natural: ["Savana"], incompatible: ["Tundra", "Amazônia", "Pantanal", "Mata Atlântica"], image: "assets/plantas/combretum.jpg" }
];

const quizData = {
    "Amazônia": [
        {
            question: "Uma empresa quer usar parte da floresta amazônica para expandir sua produção agrícola. O que fazer?",
            options: [
                { text: "Permitir que eles desmatem uma área, já que isso trará empregos para a comunidade local.", impact: "prejudicial", score: -10 },
                { text: "Propor que a produção seja feita em áreas já degradadas, mesmo que isso demande investimento em recuperação.", impact: "intermediária", score: 5 },
                { text: "Sugerir que utilizem um modelo de agrofloresta, combinando agricultura com espécies nativas da região.", impact: "sustentável", score: 15 }
            ]
        },
        {
            question: "Uma comunidade ribeirinha precisa de energia elétrica. Atualmente, ela só consegue geradores a diesel. Qual alternativa você defende?",
            options: [
                { text: "Ajudar a manter os geradores a diesel para que a energia chegue rápido.", impact: "prejudicial", score: -10 },
                { text: "Buscar financiamento para energia solar, mesmo que leve mais tempo para ser instalada.", impact: "sustentável", score: 15 },
                { text: "Levar a proposta de ligar a comunidade à rede elétrica nacional por meio de uma estrada.", impact: "intermediária", score: 5 }
            ]
        },
        {
            question: "Você descobre que estão capturando araras e macacos-prego para vender como animais de estimação. Como agir?",
            options: [
                { text: "Criar uma campanha educativa nas escolas sobre o tráfico de animais silvestres.", impact: "sustentável", score: 15 },
                { text: "Lançar uma operação para resgatar os animais, mesmo que só uma parte consiga ser salva.", impact: "intermediária", score: 5 },
                { text: "Ignorar, pois a prática movimenta a economia local e ajuda algumas famílias.", impact: "prejudicial", score: -10 }
            ]
        }
    ],
    "Cerrado": [
        {
            question: "Uma grande empresa quer plantar soja numa região do Cerrado. Como você age?",
            options: [
                { text: "Permite o cultivo com aplicação de agrotóxicos para maximizar o rendimento.", impact: "prejudicial", score: -10 },
                { text: "Exige que seja feito um estudo de impacto e o plantio em áreas já desmatadas.", impact: "intermediária", score: 5 },
                { text: "Propõe a adoção de agricultura regenerativa, com preservação de áreas nativas.", impact: "sustentável", score: 15 }
            ]
        },
        {
            question: "Durante a seca, incêndios florestais são frequentes. O que você faz?",
            options: [
                { text: "Aceita que é natural e não interfere, pois o Cerrado se regenera.", impact: "prejudicial", score: -10 },
                { text: "Organiza brigadas voluntárias com a comunidade local para prevenção.", impact: "sustentável", score: 15 },
                { text: "Constrói barreiras físicas e corta árvores próximas às propriedades.", impact: "intermediária", score: 5 }
            ]
        },
        {
            question: "Nascentes estão secando por conta da retirada da vegetação nativa. Como agir?",
            options: [
                { text: "Incentivar o uso de poços artesianos para resolver o problema rapidamente.", impact: "prejudicial", score: -10 },
                { text: "Criar um projeto de reflorestamento com espécies típicas do Cerrado.", impact: "sustentável", score: 15 },
                { text: "Investir em cisternas para captar água da chuva para a comunidade.", impact: "intermediária", score: 5 }
            ]
        }
    ],
    "Caatinga": [
        {
            question: "Fazendeiros querem aumentar a criação de gado na Caatinga. Qual sua decisão?",
            options: [
                { text: "Apoia o aumento das pastagens, mesmo que implique em desmatamento.", impact: "prejudicial", score: -10 },
                { text: "Orienta o manejo sustentável com espécies adaptadas ao clima seco.", impact: "sustentável", score: 15 },
                { text: "Proíbe novas criações e propõe a substituição por hortas comunitárias.", impact: "intermediária", score: 5 }
            ]
        },
        {
            question: "A comunidade está sofrendo com falta de água. O que fazer?",
            options: [
                { text: "Construir açudes, mesmo que para isso uma área nativa precise ser alagada.", impact: "prejudicial", score: -10 },
                { text: "Instalar sistemas de reuso e dessalinização em parceria com ONGs.", impact: "sustentável", score: 15 },
                { text: "Deixar cada família resolver por conta própria com caminhões-pipa.", impact: "intermediária", score: 5 }
            ]
        },
        {
            question: "Moradores cortam árvores nativas para lenha. Qual caminho seguir?",
            options: [
                { text: "Oferecer gás de cozinha subsidiado e orientar sobre alternativas.", impact: "sustentável", score: 15 },
                { text: "Criar uma área de manejo florestal para uso controlado da lenha.", impact: "intermediária", score: 5 },
                { text: "Reprimir a prática com multas, mesmo que isso gere atrito.", impact: "prejudicial", score: -10 }
            ]
        }
    ],
    "Mata Atlântica": [
        {
            question: "Uma cidade quer expandir para uma área de Mata Atlântica. O que fazer?",
            options: [
                { text: "Permitir com compensação ambiental em outro local.", impact: "prejudicial", score: -10 },
                { text: "Exigir construção vertical e preservar o máximo de vegetação possível.", impact: "intermediária", score: 5 },
                { text: "Barrar totalmente e redirecionar o crescimento para áreas já urbanizadas.", impact: "sustentável", score: 15 }
            ]
        },
        {
            question: "O mico-leão-dourado está desaparecendo. Qual a sua estratégia?",
            options: [
                { text: "Criar um santuário, mesmo que seja em um zoológico.", impact: "prejudicial", score: -10 },
                { text: "Recuperar corredores ecológicos para conectar fragmentos da floresta.", impact: "sustentável", score: 15 },
                { text: "Proibir totalmente a entrada de pessoas na floresta.", impact: "intermediária", score: 5 }
            ]
        },
        {
            question: "Um rio da Mata Atlântica está poluído por esgoto doméstico. Qual a medida?",
            options: [
                { text: "Instalar estações de tratamento em parceria com a população.", impact: "sustentável", score: 15 },
                { text: "Cobrar taxas mais altas para quem polui o rio.", impact: "intermediária", score: 5 },
                { text: "Esperar por investimento do governo federal.", impact: "prejudicial", score: -10 }
            ]
        }
    ],
    "Deserto": [
        {
            question: "Você é responsável por um projeto agrícola no Saara. O que propõe?",
            options: [
                { text: "Plantar espécies tropicais com irrigação pesada.", impact: "prejudicial", score: -10 },
                { text: "Utilizar técnicas de cultivo hidropônico com controle de água.", impact: "sustentável", score: 15 },
                { text: "Importar solo de outras regiões para facilitar o plantio.", impact: "intermediária", score: 5 }
            ]
        },
        {
            question: "Pessoas estão migrando por causa da desertificação. Como ajudar?",
            options: [
                { text: "Criar vilas temporárias com acesso à água e energia solar.", impact: "sustentável", score: 15 },
                { text: "Investir em reflorestamento com plantas resistentes à seca.", impact: "intermediária", score: 5 },
                { text: "Construir grandes reservatórios de água com captação subterrânea.", impact: "prejudicial", score: -10 }
            ]
        },
        {
            question: "Há um plano para instalar painéis solares no Saara. Como orientar?",
            options: [
                { text: "Apoiar, desde que não afete as rotas migratórias de animais.", impact: "sustentável", score: 15 },
                { text: "Permitir sem restrição, pois o impacto é mínimo.", impact: "intermediária", score: 5 },
                { text: "Barrar, pois o calor pode afetar os equipamentos.", impact: "prejudicial", score: -10 }
            ]
        }
    ],
    "Tundra": [
        {
            question: "O gelo está derretendo rapidamente. O que você propõe?",
            options: [
                { text: "Criar campanhas mundiais contra emissão de carbono.", impact: "sustentável", score: 15 },
                { text: "Transferir os animais para zoológicos em outras regiões.", impact: "prejudicial", score: -10 },
                { text: "Aguardar estudos mais profundos antes de tomar medidas.", impact: "intermediária", score: 5 }
            ]
        },
        {
            question: "Empresas querem explorar petróleo na Tundra. Qual sua posição?",
            options: [
                { text: "Permitir com rígidas regras ambientais.", impact: "prejudicial", score: -10 },
                { text: "Proibir totalmente devido ao risco de acidentes.", impact: "sustentável", score: 15 },
                { text: "Liberar parcialmente e compensar com reflorestamento em outros locais.", impact: "intermediária", score: 5 }
            ]
        },
        {
            question: "Rena e ursos polares estão com dificuldade de encontrar comida. Qual ação?",
            options: [
                { text: "Criar pontos de alimentação artificial.", impact: "prejudicial", score: -10 },
                { text: "Reduzir turismo para diminuir o estresse animal.", impact: "intermediária", score: 5 },
                { text: "Ampliar as áreas protegidas e monitorar com satélites.", impact: "sustentável", score: 15 }
            ]
        }
    ],
    "Pantanal": [
        {
            question: "Turistas querem visitar o Pantanal em grande número. Como organizar?",
            options: [
                { text: "Permitir livre acesso, pois isso gera renda para a região.", impact: "prejudicial", score: -10 },
                { text: "Criar trilhas e passeios ecológicos com guias locais treinados.", impact: "sustentável", score: 15 },
                { text: "Cobrar taxas elevadas para limitar o número de visitantes.", impact: "intermediária", score: 5 }
            ]
        },
        {
            question: "Uma seca histórica afeta a vida no Pantanal. Qual sua atitude?",
            options: [
                { text: "Redirecionar rios com barragens temporárias para encher áreas secas.", impact: "prejudicial", score: -10 },
                { text: "Criar centros de recuperação para animais feridos e resgatar fauna.", impact: "sustentável", score: 15 },
                { text: "Esperar a próxima estação chuvosa e deixar a natureza seguir o curso.", impact: "intermediária", score: 5 }
            ]
        },
        {
            question: "Pescadores retiram muitos peixes do Pantanal. Como agir?",
            options: [
                { text: "Proibir totalmente a pesca e multar infratores.", impact: "intermediária", score: 5 },
                { text: "Estabelecer cotas e épocas de defeso, com fiscalização.", impact: "sustentável", score: 15 },
                { text: "Incentivar a aquicultura (criação de peixes) em tanques fora do rio.", impact: "intermediária", score: 5 }
            ]
        }
    ],
    "Pampa": [
        {
            question: "Grandes rebanhos de gado estão compactando o solo. Qual solução?",
            options: [
                { text: "Limitar o número de animais por hectare.", impact: "intermediária", score: 5 },
                { text: "Incentivar o rodízio de pastagens com períodos de descanso.", impact: "sustentável", score: 15 },
                { text: "Substituir o gado por plantações de soja.", impact: "prejudicial", score: -10 }
            ]
        },
        {
            question: "Muitos acham que o Pampa tem 'pouca natureza'. Como valorizar?",
            options: [
                { text: "Criar campanhas educativas com escolas e comunidades.", impact: "sustentável", score: 15 },
                { text: "Substituir por florestas com reflorestamento exótico.", impact: "prejudicial", score: -10 },
                { text: "Incentivar o turismo científico com guias locais.", impact: "intermediária", score: 5 }
            ]
        },
        {
            question: "A ave Cardeal-do-Sul está em risco. O que fazer?",
            options: [
                { text: "Criar áreas protegidas com presença da espécie.", impact: "sustentável", score: 15 },
                { text: "Levar exemplares para criação em cativeiro.", impact: "intermediária", score: 5 },
                { text: "Reforçar fiscalização contra caça e tráfico.", impact: "intermediária", score: 5 }
            ]
        }
    ],
    "Floresta com Araucárias": [
        {
            question: "O colorido das folhas no outono atrai turistas. Como aproveitar?",
            options: [
                { text: "Promove eventos com festas e trilhas guiadas.", impact: "intermediária", score: 5 },
                { text: "Limita o acesso a áreas mais frágeis.", impact: "sustentável", score: 15 },
                { text: "Incentiva passeios de carros pelas trilhas internas.", impact: "prejudicial", score: -10 }
            ]
        },
        {
            question: "Espécies de plantas exóticas estão substituindo as nativas. E agora?",
            options: [
                { text: "Aceita a mudança como parte da evolução natural.", impact: "prejudicial", score: -10 },
                { text: "Cria programas de remoção e controle das invasoras.", impact: "sustentável", score: 15 },
                { text: "Usa herbicidas para eliminar tudo rapidamente.", impact: "prejudicial", score: -10 }
            ]
        },
        {
            question: "As árvores da floresta temperada são cortadas para móveis. Como agir?",
            options: [
                { text: "Permite extração com reflorestamento imediato.", impact: "intermediária", score: 5 },
                { text: "Proíbe o corte em áreas com maior biodiversidade.", impact: "sustentável", score: 15 },
                { text: "Apoia o uso apenas de madeira reciclada.", impact: "sustentável", score: 15 }
            ]
        }
    ],
    "Savana": [
        {
            question: "Leões se aproximam de vilarejos. Qual sua ação?",
            options: [
                { text: "Captura os animais e os transfere para áreas isoladas.", impact: "intermediária", score: 5 },
                { text: "Instala cercas naturais e sensores de presença.", impact: "sustentável", score: 15 },
                { text: "Permite que moradores defendam suas propriedades com armas.", impact: "prejudicial", score: -10 }
            ]
        },
        {
            question: "Caçadores estão perseguindo elefantes. Como combater?",
            options: [
                { text: "Implementa drones e patrulhas com guardas florestais.", impact: "sustentável", score: 15 },
                { text: "Propõe safáris fotográficos como alternativa sustentável.", impact: "sustentável", score: 15 },
                { text: "Fecha todas as entradas do parque nacional.", impact: "intermediária", score: 5 }
            ]
        },
        {
            question: "Plantações querem ocupar áreas de Savana. O que você faz?",
            options: [
                { text: "Libera apenas áreas já degradadas.", impact: "intermediária", score: 5 },
                { text: "Promove rotação de culturas para evitar esgotamento do solo.", impact: "sustentável", score: 15 },
                { text: "Incentiva agricultura de precisão para evitar desperdícios.", impact: "intermediária", score: 5 }
            ]
        }
    ]
};

const biomeImages = {
    "Amazônia": "assets/biomas/amazonia.jpg",
    "Mata Atlântica": "assets/biomas/mata-atlantica.jpg",
    "Caatinga": "assets/biomas/caatinga.jpg",
    "Pampa": "assets/biomas/pampa.jpg",
    "Cerrado": "assets/biomas/cerrado.jpg",
    "Pantanal": "assets/biomas/pantanal.jpg",
    "Floresta com Araucárias": "assets/biomas/floresta-com-araucarias.jpg",
    "Deserto": "assets/biomas/deserto.jpg",
    "Tundra": "assets/biomas/tundra.jpg",
    "Savana": "assets/biomas/savana.jpg"
};

const biomeDescriptions = {
    "Amazônia": "Um dos maiores reservatórios de vida do planeta, abriga rios extensos e vegetação densa. As chuvas são frequentes e há uma variedade incrível de espécies, algumas ainda desconhecidas pela ciência. As copas das árvores formam uma cobertura quase contínua, e o solo é fértil apenas quando equilibrado naturalmente.",
    "Mata Atlântica": "Marcado por florestas exuberantes próximas ao oceano, este ambiente combina árvores altas com uma grande diversidade de plantas e animais. Já sofreu intensos impactos humanos, mas ainda resiste com áreas preservadas. As temperaturas são amenas e a umidade é constante.",
    "Caatinga": "Aqui o solo é duro e seco durante grande parte do ano. Mesmo assim, plantas e animais aprenderam a sobreviver com pouca água. Os habitantes locais desenvolveram formas sustentáveis de conviver com o clima quente e com os espinhos presentes na vegetação.",
    "Pampa": "Neste ambiente, grandes campos abertos predominam, com vegetação rasteira e clima subtropical. O vento sopra constante pelas planícies, e a fauna está bem adaptada à vida no chão. Árvores são raras, mas há uma forte presença de gramíneas e solos férteis.",
    "Cerrado": "Este bioma é formado por uma vegetação resistente, com arbustos espaçados e árvores de casca grossa. Há épocas de muita chuva seguidas de estiagens intensas. Animais terrestres de médio porte se adaptam bem por aqui. O fogo natural ajuda na regeneração da vegetação.",
    "Pantanal": "Águas calmas se espalham por grandes extensões de terra plana, formando um verdadeiro santuário para aves e animais aquáticos. Durante parte do ano, o solo fica submerso, o que influencia todo o ciclo da vida local.",
    "Floresta com Araucárias": "Este bioma cobre a região mais fria de um extenso país tropical. Com floresta fechada e solo úmido, abriga espécies típicas de clima temperado. Sua vegetação é marcada por árvores com folhas em forma de agulhas e longos troncos.",
    "Deserto": "Um lugar de extremos, onde a água é escassa e a vida se esconde sob a areia quente ou dentro de rochas. As temperaturas variam bastante entre o dia e a noite, e poucas espécies conseguem sobreviver aqui — mas as que vivem são verdadeiros exemplos de adaptação.",
    "Tundra": "Vegetação rasteira, ventos fortes e um frio cortante predominam neste bioma gelado. O solo permanece congelado quase o ano todo, e os animais que habitam a região desenvolveram formas de lidar com a escassez de alimento e temperaturas baixíssimas.",
    "Savana": "Este bioma apresenta vastos campos com árvores esparsas e clima quente. Animais grandes percorrem longas distâncias atrás de alimento e água. As estações do ano são bem definidas, com longos períodos secos e chuvas intensas em outras épocas."
};

function updateBiomeDisplay() {
    document.getElementById('current-biome-display').textContent = `Explorando: ${currentBiome}`;
}

// Estado do jogo
let currentBiome = "Amazônia";
let selectedAnimals = [];
let selectedPlants = [];
let greenIndex = 0;
let biodiversity = 0;
let awareness = 0;
let currentQuizAnswers = [];
let biomeOrder = [
    "Amazônia",
    "Mata Atlântica",
    "Caatinga",
    "Pampa",
    "Cerrado",
    "Pantanal",
    "Floresta com Araucárias",
    "Deserto",
    "Tundra",
    "Savana"
];
let currentBiomeIndex = 0;
let completedBiomes = [];

// Funções de persistência
function saveProgress() {
    const progress = {
        completedBiomes,
        currentBiomeIndex
    };
    localStorage.setItem('gameProgress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('gameProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        completedBiomes = progress.completedBiomes || [];
        currentBiomeIndex = Math.min(progress.currentBiomeIndex || 0, biomeOrder.length - 1);
        currentBiome = biomeOrder[currentBiomeIndex];
    }
    document.getElementById('current-biome-text').textContent = `Explorando: ${currentBiome}`;
    document.getElementById('biome-description').textContent = biomeDescriptions[currentBiome] || 'Descrição não disponível.';
    const biomeImageContainer = document.getElementById('biome-image-container');
    biomeImageContainer.style.backgroundImage = `url('${biomeImages[currentBiome] || 'assets/biomas/placeholder.jpg'}')`;
    updateBiomeDisplay(); // Adiciona o bioma no display
    renderBiomeProgress();
}

// Funções auxiliares
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.classList.add('hidden'));
    document.getElementById(sectionId).classList.remove('hidden');
}

function renderBiomeProgress() {
    const statusList = document.getElementById('biome-status-list');
    statusList.innerHTML = '';
    biomeOrder.forEach(biome => {
        const li = document.createElement('li');
        li.textContent = completedBiomes.includes(biome) ? `✅ ${biome}` : `🔒 ${biome}`;
        li.className = completedBiomes.includes(biome) ? 'completed' : 'pending';
        statusList.appendChild(li);
    });
}



// Etapa 1: Escolha do Bioma
function startBiome() {
    selectedAnimals = [];
    selectedPlants = [];
    greenIndex = 0;
    biodiversity = 0;
    awareness = 0;
    currentQuizAnswers = [];
    const biomeImageContainer = document.getElementById('biome-image-container');
    const biomeImg = biomeImages[currentBiome] || 'assets/biomas/placeholder.jpg';
    biomeImageContainer.style.backgroundImage = `url('${biomeImg}')`;
    document.getElementById('current-biome-text').textContent = `Explorando: ${currentBiome}`;
    document.getElementById('biome-description').textContent = biomeDescriptions[currentBiome] || 'Descrição não disponível.';
    updateBiomeDisplay(); // Atualiza o display
    showInstructions();
    renderBiomeProgress();
    saveProgress();
}

function showInstructions() {
    document.getElementById('instructions-text').textContent = "Bem-vindo ao desafio de restaurar o bioma! Sua missão é escolher 4 animais que vivam em harmonia com o ecossistema atual. Cuidado: animais incompatíveis podem desequilibrar a natureza, reduzindo sua pontuação. Pense como um guardião da floresta e faça escolhas sustentáveis!"; // Substitua pelo seu texto
    document.getElementById('instructions-modal').classList.remove('hidden');
}

function startAnimalSelection() {
    document.getElementById('instructions-modal').classList.add('hidden'); // Esconde o modal
    showSection('animal-selection');
    loadAnimals();
}

function showPlantInstructions() {
    document.getElementById('plant-instructions-text').textContent = "Sua missão agora é selecionar 2 plantas que fortaleçam o bioma! Escolha espécies nativas para maximizar o índice verde. Plantas incompatíveis podem prejudicar o equilíbrio ecológico."; // Substitua pelo seu texto
    document.getElementById('plant-instructions-modal').classList.remove('hidden');
}

function startPlantSelection() {
    document.getElementById('plant-instructions-modal').classList.add('hidden');
    showSection('plant-selection');
    loadPlants();
}

function showQuizInstructions() {
    document.getElementById('quiz-instructions-text').textContent = "Hora de testar seus conhecimentos! Responda às perguntas com base no bioma atual. Suas escolhas vão definir o futuro sustentável do ecossistema."; // Substitua pelo seu texto
    document.getElementById('quiz-instructions-modal').classList.remove('hidden');
}

function startQuiz() {
    document.getElementById('quiz-instructions-modal').classList.add('hidden');
    showSection('quiz-section');
    loadQuiz();
}

// Função auxiliar para garantir itens nativos
function getBiomeCompatibleItems(data, biome, count) {
    const compatible = data.filter(item => item.natural.includes(biome));
    return shuffleArray([...compatible]).slice(0, Math.min(count, compatible.length));
}

// Etapa 2: Escolha de Animais
function loadAnimals() {
    
    const animalList = document.getElementById('animal-list');
    animalList.innerHTML = '';
    
    let selectedAnimals = getBiomeCompatibleItems(animalsData, currentBiome, 3);
    const remainingCount = 8 - selectedAnimals.length;
    const nonSelectedAnimals = animalsData.filter(
        animal => !selectedAnimals.some(selected => selected.name === animal.name)
    );
    const additionalAnimals = shuffleArray([...nonSelectedAnimals]).slice(0, remainingCount);
    const finalAnimalList = [...selectedAnimals, ...additionalAnimals];
    
    finalAnimalList.forEach(animal => {
        const div = document.createElement('div');
        document.getElementById('current-biome-text').textContent = `Explorando: ${currentBiome}`;

        div.className = 'animal-item';
        div.innerHTML = `
            <img src="${animal.image || 'assets/animais/placeholder.png'}" alt="${animal.name}">
            <span>${animal.name}</span>
        `;
        div.onclick = () => selectAnimal(animal.name, div);
        animalList.appendChild(div);
    });
}

function selectAnimal(name, element) {
    if (selectedAnimals.includes(name)) {
        selectedAnimals = selectedAnimals.filter(a => a !== name);
        element.classList.remove('selected');
    } else if (selectedAnimals.length < 4) {
        selectedAnimals.push(name);
        element.classList.add('selected');
    }
    document.getElementById('animal-confirm').disabled = selectedAnimals.length !== 4;
}

function confirmAnimals() {
    biodiversity = calculateBiodiversity();
    showPlantInstructions(); // Mostra modal em vez de ir direto pra plant-selection
}

// Etapa 3: Escolha de Plantas
function loadPlants() {
    const plantList = document.getElementById('plant-list');
    plantList.innerHTML = '';
    
    let selectedPlants = getBiomeCompatibleItems(plantsData, currentBiome, 3);
    const remainingCount = 8 - selectedPlants.length;
    const nonSelectedPlants = plantsData.filter(
        plant => !selectedPlants.some(selected => selected.name === plant.name)
    );
    const additionalPlants = shuffleArray([...nonSelectedPlants]).slice(0, remainingCount);
    const finalPlantList = [...selectedPlants, ...additionalPlants];
    
    finalPlantList.forEach(plant => {
        const div = document.createElement('div');
        div.className = 'plant-item';
        const imgSrc = plant.image || 'assets/plantas/placeholder.png';
        div.innerHTML = `
            <img src="${imgSrc}" alt="${plant.name}">
            <span>${plant.name}</span>
        `;
        div.onclick = () => selectPlant(plant.name, div);
        plantList.appendChild(div);
    });
    
    updatePlantConfirmButton();
}

function selectPlant(name, element) {
    if (selectedPlants.includes(name)) {
        selectedPlants = selectedPlants.filter(p => p !== name);
        element.classList.remove('selected');
    } else if (selectedPlants.length < 2) {
        selectedPlants.push(name);
        element.classList.add('selected');
    }
    document.getElementById('plant-confirm').disabled = selectedPlants.length !== 2;
}

function confirmPlants() {
    greenIndex = calculateGreenIndex();
    showBiomeStatus();
}

// Etapa 4: Status do Bioma
function calculateBiodiversity() {
    let score = 0;
    selectedAnimals.forEach(animalName => {
        const animal = animalsData.find(a => a.name === animalName);
        if (animal.natural.includes(currentBiome)) {
            score += 7.5;
        }
    });
    return Math.min(score, 30);
}

function calculateGreenIndex() {
    let score = 0;
    selectedPlants.forEach(plantName => {
        const plant = plantsData.find(p => p.name === plantName);
        if (plant.natural.includes(currentBiome)) {
            score += 15;
        }
    });
    return Math.min(score, 30);
}

function showBiomeStatus() {
    showSection('biome-status');
    const biomeStatusImage = document.getElementById('biome-status-image');
    biomeStatusImage.style.backgroundImage = `url('${biomeImages[currentBiome] || 'assets/biomas/placeholder.jpg'}')`;
    const totalScore = greenIndex + biodiversity;
    document.getElementById('green-index').textContent = `${greenIndex.toFixed(0)}/30`;
    document.getElementById('biodiversity').textContent = `${biodiversity.toFixed(0)}/30`;
    document.getElementById('total-score').textContent = `${totalScore.toFixed(0)}/60`;

    let statusText = "Análise do seu bioma:\n<br>";
    
    selectedAnimals.forEach(animalName => {
        const animal = animalsData.find(a => a.name === animalName);
        if (!animal.natural.includes(currentBiome)) {
            statusText += `⚠️ ${animalName} não é nativo do ${currentBiome}. Isso pode causar desequilíbrios ecológicos. \n <br>`;
        } else {
            statusText += `✅ ${animalName} é um animal que consegue sobreviver no ${currentBiome}.\n <br>`;
        }
    });
    selectedPlants.forEach(plantName => {
        const plant = plantsData.find(p => p.name === plantName);
        if (!plant.natural.includes(currentBiome)) {
            statusText += `<br>⚠️ ${plantName} não prospera no ${currentBiome}. O índice verde foi afetado.\n`;
        } else {
            statusText += `<br>✅ ${plantName} é um tipo de planta adequada para ${currentBiome}.\n`;
        }
    });

    if (totalScore >= 50) {
        statusText += "<br><br>\nParabéns! Seu bioma está sustentável o suficiente para prosseguir ao quiz de consciência ambiental.";
        document.getElementById('quiz-button').disabled = false;
    } else {
        statusText += `<br><br>\nSeu bioma não atingiu os 50 pontos necessários (atual: ${totalScore.toFixed(1)}). Tente novamente!`;
        document.getElementById('quiz-button').disabled = true;
    }

    document.getElementById('status-text').innerHTML = statusText;
}

function proceedToQuiz() {
    showQuizInstructions(); // Mostra modal em vez de ir direto pra quiz-section
}

// Etapa 5: Quiz Ambiental
function loadQuiz() {
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = '';
    const questions = quizData[currentBiome];
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.className = 'quiz-question';
        div.innerHTML = `<p><strong>Pergunta ${index + 1}:</strong> ${q.question}</p>`;
        q.options.forEach((option, optIndex) => {
            const id = `q${index}-o${optIndex}`;
            div.innerHTML += `
                <label>
                    <input type="radio" name="q${index}" value="${optIndex}" id="${id}">
                    ${option.text}
                </label><br>
            `;
        });
        quizContent.appendChild(div);
    });

    quizContent.addEventListener('change', () => {
        const allAnswered = questions.every((_, i) => 
            document.querySelector(`input[name="q${i}"]:checked`)
        );
        document.getElementById('quiz-submit').disabled = !allAnswered;
    });
}

function submitQuiz() {
    awareness = 0;
    const questions = quizData[currentBiome];
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption) {
            const optionIndex = parseInt(selectedOption.value);
            awareness += q.options[optionIndex].score;
        }
    });
    awareness = Math.max(0, Math.min(awareness, 40));
    showFinalResult();
}

// Resultado Final
function showFinalResult() {
    showSection('final-result');
    const totalScore = greenIndex + biodiversity + awareness;
    document.getElementById('final-green').textContent = greenIndex.toFixed(0);
    document.getElementById('final-biodiversity').textContent = biodiversity.toFixed(0);
    document.getElementById('final-awareness').textContent = awareness.toFixed(0);
    document.getElementById('final-total').textContent = totalScore.toFixed(0);

    let finalText = `Você completou o bioma ${currentBiome}!\n`;
    if (totalScore >= 80) {
        finalText += "Excelente! Seu bioma está equilibrado e suas decisões foram sustentáveis.";
    } else if (totalScore >= 50) {
        finalText += "Bom trabalho! Seu bioma está funcional, mas há espaço para melhorar a sustentabilidade.";
    } else {
        finalText += "Seu bioma precisa de mais atenção. Revise suas escolhas para alcançar maior equilíbrio.";
    }
    document.getElementById('final-text').textContent = finalText;

    if (totalScore >= 50 && !completedBiomes.includes(currentBiome)) {
        completedBiomes.push(currentBiome);
        saveProgress();
    }
}

// Avançar para o próximo bioma
function nextBiome() {
    if (greenIndex + biodiversity >= 50) {
        currentBiomeIndex++;
        if (currentBiomeIndex >= biomeOrder.length) {
            alert("Parabéns! Você completou todos os biomas!");
            completedBiomes = [];
            currentBiomeIndex = 0;
            localStorage.removeItem('gameProgress');
        }
        currentBiome = biomeOrder[currentBiomeIndex];
        saveProgress();
    } else {
        alert("Você precisa atingir pelo menos 50 pontos (índice verde + biodiversidade) para avançar!");
    }
    showSection('biome-selection');
    document.getElementById('current-biome-text').textContent = `Explorando: ${currentBiome}`;
    document.getElementById('biome-description').textContent = biomeDescriptions[currentBiome] || 'Descrição não disponível.';
    const biomeImageContainer = document.getElementById('biome-image-container');
    biomeImageContainer.style.backgroundImage = `url('${biomeImages[currentBiome] || 'assets/biomas/placeholder.jpg'}')`;
    updateBiomeDisplay(); // Atualiza o display
    renderBiomeProgress();
}

function restartBiome() {
    showSection('biome-selection');
    document.getElementById('current-biome-text').textContent = `Explorando: ${currentBiome}`;
    document.getElementById('biome-description').textContent = biomeDescriptions[currentBiome] || 'Descrição não disponível.';
    const biomeImageContainer = document.getElementById('biome-image-container');
    biomeImageContainer.style.backgroundImage = `url('${biomeImages[currentBiome] || 'assets/biomas/placeholder.jpg'}')`;
    updateBiomeDisplay(); // Atualiza o display
    renderBiomeProgress();
}

// Inicializar progresso na carga da página
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
});