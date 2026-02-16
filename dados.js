// Banco de Dados do Escala Dream Team

const JOGADORES = [
    // --- SOCIEDADE ESPORTIVA PALMEIRAS ---
    // Goleiros
    { id: "cmiguel_pal", nome: "Carlos Miguel", time: "palmeiras", pos: "GOL", img: "" },
    { id: "lomba_pal", nome: "Marcelo Lomba", time: "palmeiras", pos: "GOL", img: "" },
    { id: "aranha_pal", nome: "Aranha", time: "palmeiras", pos: "GOL", img: "" },
    // Zagueiros
    { id: "murilo_pal", nome: "Murilo", time: "palmeiras", pos: "ZAG", img: "" },
    { id: "gomez_pal", nome: "Gustavo Gómez", time: "palmeiras", pos: "ZAG", img: "" },
    { id: "fuchs_pal", nome: "Bruno Fuchs", time: "palmeiras", pos: "ZAG", img: "" },
    { id: "benedetti_pal", nome: "Luis Benedetti", time: "palmeiras", pos: "ZAG", img: "" },
    // Laterais
    { id: "giay_pal", nome: "Agustín Giay", time: "palmeiras", pos: "LAT", img: "" },
    { id: "khellven_pal", nome: "Khellven", time: "palmeiras", pos: "LAT", img: "" },
    { id: "piquerez_pal", nome: "Joaquín Piquerez", time: "palmeiras", pos: "LAT", img: "" },
    { id: "jefte_pal", nome: "Jefté", time: "palmeiras", pos: "LAT", img: "" },
    { id: "arthur_pal", nome: "Arthur Gabriel", time: "palmeiras", pos: "LAT", img: "" },
    // Volantes
    { id: "emimartinez_pal", nome: "Emiliano Martínez", time: "palmeiras", pos: "VOL", img: "" },
    { id: "mfreitas_pal", nome: "Marlon Freitas", time: "palmeiras", pos: "VOL", img: "" },
    { id: "lpacheco_pal", nome: "Luis Pacheco", time: "palmeiras", pos: "VOL", img: "" },
    // Meias
    { id: "andreas_pal", nome: "Andreas Pereira", time: "palmeiras", pos: "MEI", img: "" },
    { id: "lucas_eva_pal", nome: "Lucas Evangelista", time: "palmeiras", pos: "MEI", img: "" },
    { id: "mauricio_pal", nome: "Mauricio", time: "palmeiras", pos: "MEI", img: "" },
    { id: "figueiredo_pal", nome: "Figueiredo", time: "palmeiras", pos: "MEI", img: "" },
    { id: "larson_pal", nome: "Larson", time: "palmeiras", pos: "MEI", img: "" },
    // Pontas (Classificados como ATA)
    { id: "arias_pal", nome: "Jhon Arias", time: "palmeiras", pos: "ATA", img: "" },
    { id: "sosa_pal", nome: "Ramón Sosa", time: "palmeiras", pos: "ATA", img: "" },
    { id: "felipe_pal", nome: "Felipe Anderson", time: "palmeiras", pos: "ATA", img: "" },
    { id: "paulinho_pal", nome: "Paulinho", time: "palmeiras", pos: "ATA", img: "" },
    { id: "brodrigues_pal", nome: "Bruno Rodrigues", time: "palmeiras", pos: "ATA", img: "" },
    { id: "riquelme_pal", nome: "Riquelme Fillipi", time: "palmeiras", pos: "ATA", img: "" },
    { id: "allan_ponta_pal", nome: "Allan", time: "palmeiras", pos: "ATA", img: "" },
    // Centroavantes (Classificados como ATA)
    { id: "vitorroque_pal", nome: "Vitor Roque", time: "palmeiras", pos: "ATA", img: "" },
    { id: "flaco_pal", nome: "José Manuel López", time: "palmeiras", pos: "ATA", img: "" },
    { id: "luighi_pal", nome: "Luighi", time: "palmeiras", pos: "ATA", img: "" },
    { id: "erick_pal", nome: "Erick Belé", time: "palmeiras", pos: "ATA", img: "" },

    // --- SPORT CLUB CORINTHIANS PAULISTA ---
    // Goleiros
    { id: "hugo_cor", nome: "Hugo Souza", time: "corinthians", pos: "GOL", img: "" },
    { id: "donelli_cor", nome: "Matheus Donelli", time: "corinthians", pos: "GOL", img: "" },
    { id: "longo_cor", nome: "Felipe Longo", time: "corinthians", pos: "GOL", img: "" },
    { id: "kaue_cor", nome: "Kauê", time: "corinthians", pos: "GOL", img: "" },
    // Zagueiros
    { id: "andre_cor", nome: "André Ramalho", time: "corinthians", pos: "ZAG", img: "" },
    { id: "tchoca_cor", nome: "Tchoca", time: "corinthians", pos: "ZAG", img: "" },
    { id: "caca_cor", nome: "Cacá", time: "corinthians", pos: "ZAG", img: "" },
    { id: "gustavo_cor", nome: "Gustavo Henrique", time: "corinthians", pos: "ZAG", img: "" },
    { id: "gabriel_cor", nome: "Gabriel Paulista", time: "corinthians", pos: "ZAG", img: "" },
    { id: "renato_cor", nome: "Renato Santos", time: "corinthians", pos: "ZAG", img: "" },
    // Laterais
    { id: "matheuzinho_cor", nome: "Matheuzinho", time: "corinthians", pos: "LAT", img: "" },
    { id: "pedro_cor", nome: "Pedro Milans", time: "corinthians", pos: "LAT", img: "" },
    { id: "bidu_cor", nome: "Matheus Bidu", time: "corinthians", pos: "LAT", img: "" },
    { id: "hugo_lat_cor", nome: "Hugo", time: "corinthians", pos: "LAT", img: "" },
    { id: "angileri_cor", nome: "Fabrizio Angileri", time: "corinthians", pos: "LAT", img: "" },
    // Volantes
    { id: "raniele_cor", nome: "Raniele", time: "corinthians", pos: "VOL", img: "" },
    { id: "allan_vol_cor", nome: "Allan", time: "corinthians", pos: "VOL", img: "" },
    { id: "martinez_cor", nome: "José Martínez", time: "corinthians", pos: "VOL", img: "" },
    { id: "charles_cor", nome: "Charles", time: "corinthians", pos: "VOL", img: "" },
    // Meias
    { id: "garro_cor", nome: "Rodrigo Garro", time: "corinthians", pos: "MEI", img: "" },
    { id: "bidon_cor", nome: "Breno Bidon", time: "corinthians", pos: "MEI", img: "" },
    { id: "alex_cor", nome: "Alex Santana", time: "corinthians", pos: "MEI", img: "" },
    { id: "matheus_mei_cor", nome: "Matheus Pereira", time: "corinthians", pos: "MEI", img: "" },
    { id: "carrillo_cor", nome: "André Carrillo", time: "corinthians", pos: "MEI", img: "" },
    // Pontas e Atacantes (ATA)
    { id: "vitinho_cor", nome: "Vitinho", time: "corinthians", pos: "ATA", img: "" },
    { id: "kaio_cor", nome: "Kaio César", time: "corinthians", pos: "ATA", img: "" },
    { id: "kayke_cor", nome: "Kayke", time: "corinthians", pos: "ATA", img: "" },
    { id: "dieguinho_cor", nome: "Dieguinho", time: "corinthians", pos: "ATA", img: "" },
    { id: "yuri_cor", nome: "Yuri Alberto", time: "corinthians", pos: "ATA", img: "" },
    { id: "memphis_cor", nome: "Memphis Depay", time: "corinthians", pos: "ATA", img: "" },
    { id: "pedroraul_cor", nome: "Pedro Raul", time: "corinthians", pos: "ATA", img: "" },
    { id: "guinegao_cor", nome: "Gui Negão", time: "corinthians", pos: "ATA", img: "" },

    // --- SÃO PAULO FUTEBOL CLUBE ---
    // Goleiros
    { id: "coronel_sp", nome: "Carlos Coronel", time: "saopaulo", pos: "GOL", img: "" },
    { id: "rafael_sp", nome: "Rafael", time: "saopaulo", pos: "GOL", img: "" },
    { id: "young_sp", nome: "Young", time: "saopaulo", pos: "GOL", img: "" },
    { id: "preis_sp", nome: "Felipe Preis", time: "saopaulo", pos: "GOL", img: "" },
    // Zagueiros
    { id: "ferraresi_sp", nome: "Nahuel Ferraresi", time: "saopaulo", pos: "ZAG", img: "" },
    { id: "alan_sp", nome: "Alan Franco", time: "saopaulo", pos: "ZAG", img: "" },
    { id: "toloi_sp", nome: "Rafael Tolói", time: "saopaulo", pos: "ZAG", img: "" },
    { id: "arboleda_sp", nome: "Robert Arboleda", time: "saopaulo", pos: "ZAG", img: "" },
    { id: "sabino_sp", nome: "Sabino", time: "saopaulo", pos: "ZAG", img: "" },
    { id: "doria_sp", nome: "Matheus Dória", time: "saopaulo", pos: "ZAG", img: "" },
    // Laterais
    { id: "cedric_sp", nome: "Cédric Soares", time: "saopaulo", pos: "LAT", img: "" },
    { id: "maik_sp", nome: "Maik", time: "saopaulo", pos: "LAT", img: "" },
    { id: "lramon_sp", nome: "Lucas Ramon", time: "saopaulo", pos: "LAT", img: "" },
    { id: "igor_sp", nome: "Igor Felisberto", time: "saopaulo", pos: "LAT", img: "" },
    { id: "enzo_sp", nome: "Enzo Díaz", time: "saopaulo", pos: "LAT", img: "" },
    { id: "wendell_sp", nome: "Wendell", time: "saopaulo", pos: "LAT", img: "" },
    { id: "nicolas_sp", nome: "Nicolas", time: "saopaulo", pos: "LAT", img: "" },
    // Volantes
    { id: "pablo_sp", nome: "Pablo Maia", time: "saopaulo", pos: "VOL", img: "" },
    { id: "luan_sp", nome: "Luan", time: "saopaulo", pos: "VOL", img: "" },
    { id: "negrucci_sp", nome: "Felipe Negrucci", time: "saopaulo", pos: "VOL", img: "" },
    { id: "hugo_vol_sp", nome: "Hugo Leonardo", time: "saopaulo", pos: "VOL", img: "" },
    // Meias
    { id: "oscar_sp", nome: "Oscar", time: "saopaulo", pos: "MEI", img: "" },
    { id: "marcos_sp", nome: "Marcos Antônio", time: "saopaulo", pos: "MEI", img: "" },
    { id: "bobadilla_sp", nome: "Damián Bobadilla", time: "saopaulo", pos: "MEI", img: "" },
    { id: "alisson_sp", nome: "Alisson", time: "saopaulo", pos: "MEI", img: "" },
    { id: "danielzinho_sp", nome: "Danielzinho", time: "saopaulo", pos: "MEI", img: "" },
    { id: "pedro_mei_sp", nome: "Pedro Ferreira", time: "saopaulo", pos: "MEI", img: "" },
    // Pontas e Atacantes (ATA)
    { id: "lucas_sp", nome: "Lucas Moura", time: "saopaulo", pos: "ATA", img: "" },
    { id: "ferreirinha_sp", nome: "Ferreirinha", time: "saopaulo", pos: "ATA", img: "" },
    { id: "tete_sp", nome: "Tetê", time: "saopaulo", pos: "ATA", img: "" },
    { id: "lucca_sp", nome: "Lucca", time: "saopaulo", pos: "ATA", img: "" },
    { id: "ryan_sp", nome: "Ryan Francisco", time: "saopaulo", pos: "ATA", img: "" },
    { id: "gonzalo_sp", nome: "Gonzalo Tapia", time: "saopaulo", pos: "ATA", img: "" },
    { id: "andre_ata_sp", nome: "André Silva", time: "saopaulo", pos: "ATA", img: "" },
    { id: "calleri_sp", nome: "Jonathan Calleri", time: "saopaulo", pos: "ATA", img: "" },
    { id: "luciano_sp", nome: "Luciano", time: "saopaulo", pos: "ATA", img: "" },
    { id: "paulinho_ata_sp", nome: "Paulinho", time: "saopaulo", pos: "ATA", img: "" },

    // --- CLUBE DE REGATAS DO FLAMENGO ---
    // Goleiros
    { id: "rossi_fla", nome: "Agustín Rossi", time: "flamengo", pos: "GOL", img: "" },
    { id: "andrew_fla", nome: "Andrew", time: "flamengo", pos: "GOL", img: "" },
    { id: "dyogo_fla", nome: "Dyogo Alves", time: "flamengo", pos: "GOL", img: "" },
    // Zagueiros
    { id: "leopereira_fla", nome: "Léo Pereira", time: "flamengo", pos: "ZAG", img: "" },
    { id: "leoortiz_fla", nome: "Léo Ortiz", time: "flamengo", pos: "ZAG", img: "" },
    { id: "vitao_fla", nome: "Vitão", time: "flamengo", pos: "ZAG", img: "" },
    { id: "danilo_fla", nome: "Danilo", time: "flamengo", pos: "ZAG", img: "" },
    { id: "joaovictor_fla", nome: "João Victor", time: "flamengo", pos: "ZAG", img: "" },
    // Laterais
    { id: "royal_fla", nome: "Emerson Royal", time: "flamengo", pos: "LAT", img: "" },
    { id: "varela_fla", nome: "Guillermo Varela", time: "flamengo", pos: "LAT", img: "" },
    { id: "ayrton_fla", nome: "Ayrton Lucas", time: "flamengo", pos: "LAT", img: "" },
    { id: "alexsandro_fla", nome: "Alex Sandro", time: "flamengo", pos: "LAT", img: "" },
    // Volantes
    { id: "pulgar_fla", nome: "Erick Pulgar", time: "flamengo", pos: "VOL", img: "" },
    { id: "jorginho_fla", nome: "Jorginho", time: "flamengo", pos: "VOL", img: "" },
    { id: "evertton_fla", nome: "Evertton Araújo", time: "flamengo", pos: "VOL", img: "" },
    // Meias
    { id: "paqueta_fla", nome: "Lucas Paquetá", time: "flamengo", pos: "MEI", img: "" },
    { id: "arrascaeta_fla", nome: "Giorgian de Arrascaeta", time: "flamengo", pos: "MEI", img: "" },
    { id: "delacruz_fla", nome: "Nicolás de la Cruz", time: "flamengo", pos: "MEI", img: "" },
    { id: "saul_fla", nome: "Saúl Ñíguez", time: "flamengo", pos: "MEI", img: "" },
    { id: "carrascal_fla", nome: "Jorge Carrascal", time: "flamengo", pos: "MEI", img: "" },
    // Pontas e Atacantes (ATA)
    { id: "lino_fla", nome: "Samuel Lino", time: "flamengo", pos: "ATA", img: "" },
    { id: "everton_fla", nome: "Everton", time: "flamengo", pos: "ATA", img: "" },
    { id: "luizaraujo_fla", nome: "Luiz Araújo", time: "flamengo", pos: "ATA", img: "" },
    { id: "plata_fla", nome: "Gonzalo Plata", time: "flamengo", pos: "ATA", img: "" },
    { id: "wallace_fla", nome: "Wallace Yan", time: "flamengo", pos: "ATA", img: "" },
    { id: "bhenrique_fla", nome: "Bruno Henrique", time: "flamengo", pos: "ATA", img: "" },
    { id: "pedro_fla", nome: "Pedro", time: "flamengo", pos: "ATA", img: "" }
];

// Escudos para os cards (Mantive as URLs de exemplo)
const ESCUDOS = {
    palmeiras: "https://s.sde.globo.com/media/organizations/2019/07/20/Palmeiras-65.png",
    corinthians: "https://s.sde.globo.com/media/organizations/2019/09/30/Corinthians-65.png",
    saopaulo: "https://s.sde.globo.com/media/organizations/2014/04/14/sao_paulo_60x60.png",
    flamengo: "https://s.sde.globo.com/media/organizations/2018/04/10/Flamengo-65.png"
};

// Configuração das Formações
const FORMACOES = {
    "4-3-3": [
        { top: 85, left: 50, type: ['GOL'] },
        { top: 70, left: 15, type: ['LAT', 'ZAG'] }, // LE
        { top: 70, left: 35, type: ['ZAG'] },
        { top: 70, left: 65, type: ['ZAG'] },
        { top: 70, left: 85, type: ['LAT', 'ZAG'] }, // LD
        { top: 50, left: 30, type: ['VOL', 'MEI'] },
        { top: 50, left: 70, type: ['VOL', 'MEI'] },
        { top: 40, left: 50, type: ['MEI', 'ATA'] },
        { top: 20, left: 15, type: ['ATA'] }, // PE
        { top: 15, left: 50, type: ['ATA'] }, // CA
        { top: 20, left: 85, type: ['ATA'] }  // PD
    ],
    "4-4-2": [
        { top: 85, left: 50, type: ['GOL'] },
        { top: 70, left: 10, type: ['LAT'] },
        { top: 70, left: 35, type: ['ZAG'] },
        { top: 70, left: 65, type: ['ZAG'] },
        { top: 70, left: 90, type: ['LAT'] },
        { top: 45, left: 20, type: ['MEI', 'VOL'] },
        { top: 45, left: 40, type: ['VOL'] },
        { top: 45, left: 60, type: ['VOL'] },
        { top: 45, left: 80, type: ['MEI', 'VOL'] },
        { top: 15, left: 35, type: ['ATA'] },
        { top: 15, left: 65, type: ['ATA'] }
    ],
    "3-5-2": [
        { top: 85, left: 50, type: ['GOL'] },
        { top: 70, left: 20, type: ['ZAG'] },
        { top: 70, left: 50, type: ['ZAG'] },
        { top: 70, left: 80, type: ['ZAG'] },
        { top: 50, left: 10, type: ['LAT', 'MEI'] },
        { top: 50, left: 35, type: ['VOL'] },
        { top: 50, left: 65, type: ['VOL'] },
        { top: 50, left: 90, type: ['LAT', 'MEI'] },
        { top: 35, left: 50, type: ['MEI'] },
        { top: 15, left: 35, type: ['ATA'] },
        { top: 15, left: 65, type: ['ATA'] }
    ]
};
