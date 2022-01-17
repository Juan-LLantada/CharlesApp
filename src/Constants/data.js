//socials
import {Facebook, Instagram, Whatsapp, Mail, Youtube} from './Icons/socials';
//sales
import {Diagnosis, Engine, Hands, Rentability, Oportunity} from './Icons/sales';
//logos
import {ChronosIcon, StomaIcon, Amaneceres, Bios} from './Icons/logos';
//side bar
//chronos
import {CULTIVOS} from './Icons/sidebarcultivos';
//design
import {Golf, Nursery, Productos, Sport} from './Icons/design';
import {width} from './styles';
//stoma researches
import {
  Arandano,
  Calabaza,
  ChileS,
  Lechuga,
  Melon,
  Papaya,
  Pepino,
} from './Icons/stomaR';
import {
  Agave,
  Agave2,
  Agave3,
  Arandano1,
  Arandano2,
  Arandano3,
  Calabaza1,
  Frambuesa,
  Frambuesas2,
  Fresa,
  Limon,
  Maiz,
  Pimiento,
  Pimiento2,
  Rosal,
} from './Icons/chronosR';

//users allowed in app
export const users = [
  {user: 'cliente001 ', password: 'a1b2c3d4a'},
  {user: 'cliente002 ', password: 'a1b2c3d4b'},
  {user: 'cliente003 ', password: 'a1b2c3d4c'},
  {user: 'cliente004 ', password: 'a1b2c3d4d'},
  {user: 'cliente005 ', password: 'a1b2c3d4e'},
  {user: 'cliente006 ', password: 'a1b2c3d4f'},
  {user: 'cliente007 ', password: 'a1b2c3d4g'},
  {user: 'cliente008 ', password: 'a1b2c3d4h'},
  {user: 'cliente009 ', password: 'a1b2c3d4i'},
  {user: 'cliente010 ', password: 'a1b2c3d4j'},
];

export const presentaciones = ['1 Litro', '10 Litros', '20 Litros'];

export const addressContact =
  'Oficina: Av. Ludwig Van Beethoven 4914-12 Lomas del Seminario, C.P.45038 Zapopan, Jal.';

export const line1 = 'Para dar ';
export const textHome = [
  {text: 'soluciones '},
  {text: 'que actúan en la '},
  {text: 'eficiencia fisiológica '},
  {text: 'y '},
  {text: 'bioquímica '},
];
export const line2 = 'de las plantas. ';

export const ventasIcons = [
  {Icon: Diagnosis, text: `Diagnóstico${'\n'}Especializado`},
  {Icon: Oportunity, text: `Surtimiento${'\n'}Oportuno`},
  {Icon: Rentability, text: 'Rentabilidad'},
];

export const ventasIcons2 = [
  {Icon: Hands, text: `Recomendación${'\n'}Acertiva`},
  {Icon: Engine, text: `Respuesta del${'\n'}Beneficio`},
];

export const sideCultivosChronos = [
  {
    title: 'Círculo de beneficios',
    route: 'Benefits',
    Icon: CULTIVOS[34],
    screen: 'Cultivos',
  },
  {title: 'Agave', route: 'Agave', Icon: CULTIVOS[0], screen: 'Cultivos'},
  {title: 'Aguacate', route: 'Aguacate', Icon: CULTIVOS[1], screen: 'Cultivos'},
  {title: 'Ajo', route: 'Ajo', Icon: CULTIVOS[2], screen: 'Cultivos'},
  {title: 'Alfalfa', route: 'Alfalfa', Icon: CULTIVOS[3], screen: 'Cultivos'},
  {
    title: 'Apio, Espinaca, Lechuga',
    route: 'Apio, Espinaca, Lechuga',
    Icon: CULTIVOS[4],
    screen: 'Cultivos',
  },
  {title: 'Arroz', route: 'Arroz', Icon: CULTIVOS[5], screen: 'Cultivos'},
  {title: 'Banano', route: 'Banano', Icon: CULTIVOS[6], screen: 'Cultivos'},
  {title: 'Berries', route: 'Berries', Icon: CULTIVOS[7], screen: 'Cultivos'},
  {title: 'Brócoli', route: 'Brócoli', Icon: CULTIVOS[8], screen: 'Cultivos'},
  {title: 'Café', route: 'Café', Icon: CULTIVOS[9], screen: 'Cultivos'},
  {
    title: 'Calabaza',
    route: 'Calabaza',
    Icon: CULTIVOS[10],
    screen: 'Cultivos',
  },
  {title: 'Caña', route: 'Caña', Icon: CULTIVOS[11], screen: 'Cultivos'},
  {title: 'Cebolla', route: 'Cebolla', Icon: CULTIVOS[12], screen: 'Cultivos'},
  {title: 'Chiles', route: 'Chiles', Icon: CULTIVOS[13], screen: 'Cultivos'},
  {
    title: 'Espárrago',
    route: 'Espárrago',
    Icon: CULTIVOS[14],
    screen: 'Cultivos',
  },
  {title: 'Fresa', route: 'Fresa', Icon: CULTIVOS[15], screen: 'Cultivos'},
  {
    title: 'Frijol, Soya y Garbanzo',
    route: 'Frijol, Soya y Garbanzo',
    Icon: CULTIVOS[16],
    screen: 'Cultivos',
  },
  {title: 'Limón', route: 'Limón', Icon: CULTIVOS[17], screen: 'Cultivos'},
  {title: 'Maíz', route: 'Maíz', Icon: CULTIVOS[18], screen: 'Cultivos'},
  {title: 'Mango', route: 'Mango', Icon: CULTIVOS[19], screen: 'Cultivos'},
  {title: 'Manzana', route: 'Manzana', Icon: CULTIVOS[20], screen: 'Cultivos'},
  {title: 'Melón', route: 'Melón', Icon: CULTIVOS[21], screen: 'Cultivos'},
  {title: 'Naranja', route: 'Naranja', Icon: CULTIVOS[22], screen: 'Cultivos'},
  {title: 'Nogal', route: 'Nogal', Icon: CULTIVOS[23], screen: 'Cultivos'},
  {
    title: 'Ornamentales',
    route: 'Ornamentales',
    Icon: CULTIVOS[24],
    screen: 'Cultivos',
  },
  {title: 'Papa', route: 'Papa', Icon: CULTIVOS[25], screen: 'Cultivos'},
  {title: 'Papaya', route: 'Papaya', Icon: CULTIVOS[26], screen: 'Cultivos'},
  {title: 'Pepino', route: 'Pepino', Icon: CULTIVOS[27], screen: 'Cultivos'},
  {title: 'Piña', route: 'Piña', Icon: CULTIVOS[28], screen: 'Cultivos'},
  {title: 'Sandía', route: 'Sandía', Icon: CULTIVOS[29], screen: 'Cultivos'},
  {title: 'Tomate', route: 'Tomate', Icon: CULTIVOS[30], screen: 'Cultivos'},
  {title: 'Trigo', route: 'Trigo', Icon: CULTIVOS[31], screen: 'Cultivos'},
  {title: 'Uva', route: 'Uva', Icon: CULTIVOS[32], screen: 'Cultivos'},
  {
    title: 'Zanahoria',
    route: 'Zanahoria',
    Icon: CULTIVOS[33],
    screen: 'Cultivos',
  },
];

export const sideCultivosStoma = [
  {
    title: 'Círculo de beneficios',
    route: 'Benefits',
    Icon: CULTIVOS[34],
    screen: 'Cultivos',
  },
  {title: 'Stoma-Or', route: 'Stoma-Or', Icon: CULTIVOS[0], screen: 'Cultivos'},
];

export const sideDistChronos = [
  {title: 'Colima', route: 'Colima', Icon: Productos, screen: 'Distribuidores'},
  {
    title: 'Veracrúz',
    route: 'Veracrúz',
    Icon: Productos,
    screen: 'Distribuidores',
  },
  {
    title: 'Chiapas',
    route: 'Chiapas',
    Icon: Productos,
    screen: 'Distribuidores',
  },
  {
    title: 'Jalisco, Michoacán y Bajío',
    route: 'Jalisco, Michoacán y Bajío',
    Icon: Productos,
    screen: 'Distribuidores',
  },
];

const golfField = [
  {
    title: 'Campos de Golf',
    route: 'Campos de Golf',
    Icon: Golf,
    screen: 'Campos de Golf',
  },
];

const sportArea = [
  {
    title: 'Áreas Deportivas',
    route: 'Areas Deportivas',
    Icon: Sport,
    screen: 'Areas Deportivas',
  },
];

const plantNursery = [
  {
    title: 'Viveros',
    route: 'Viveros',
    Icon: Nursery,
    screen: 'Viveros',
  },
];
//fb://page/217737019108773
export const chronosSideBar = [
  {title: 'CULTIVOS', list: sideCultivosChronos, accordion: true},
  {title: 'CAMPOS DE GOLF', list: golfField, accordion: false},
  {title: 'ÁREAS DEPORTIVAS', list: sportArea, accordion: false},
  {title: 'VIVEROS', list: plantNursery, accordion: false},
  {title: 'DISTRIBUIDORES', list: sideDistChronos, accordion: true},
];

export const stomaSideBar = [
  {title: 'CULTIVOS', list: sideCultivosStoma, accordion: true},
  {title: 'CAMPOS DE GOLF', list: golfField, accordion: false},
  {title: 'ÁREAS DEPORTIVAS', list: sportArea, accordion: false},
  {title: 'VIVEROS', list: plantNursery, accordion: false},
  {title: 'DISTRIBUIDORES', list: sideDistChronos, accordion: true},
];

export const logos = [
  {
    title: 'CHRONOS',
    Icon: ChronosIcon,
    route: 'DrawerChronos',
    size: {width: width / 2.5, height: width / 2.5},
  },
  {
    title: 'STOMA - OR',
    Icon: StomaIcon,
    route: 'DrawerStoma',
    size: {width: width / 2.1, height: width / 2.1},
  },
];

export const community = [
  {
    title: 'VENTA DE PRODUCTOS',
    Icon: Productos,
    route: 'Ventas',
    size: {width: width / 3.5, height: width / 3.5},
  },
  {
    title: 'AMIGOS DE LOS AMANCERES',
    Icon: Amaneceres,
    route: 'Comunidad',
    size: {width: width / 2.1, height: width / 2.1},
  },
];

export const socials = [
  {
    title: 'Visita www.epsilonbios.com!',
    Icon: Bios,
    url: 'https://epsilonbios.com',
  },
  {
    title: 'Envíanos un Whatsapp!',
    Icon: Whatsapp,
    url: 'whatsapp://send?text= Hola, tengo una duda! &phone=5213318659920',
  },
  {
    title: 'Envíanos un correo!',
    Icon: Mail,
    url:
      'mailto:Alopez@epsilonbios.com?&subject=Contacto&body=Hola, tengo una duda!',
  },
  {
    title: 'Visita nuestra página de Facebook!',
    Icon: Facebook,
    url: 'https://www.facebook.com/EpsilonBios',
  },
  {
    title: 'Visita nuestra página de Instagram!',
    Icon: Instagram,
    url: 'https://instagram.com/epsilonbios?igshid=im2vgkdiytwc',
  },
  {
    title: 'Visita nuestro canal de Youtube!',
    Icon: Youtube,
    url: 'https://www.youtube.com/channel/UCqBEeZ-aZy2ksunc0BlJXfQ',
  },
];

export const welcomeText1 =
  'Estás a solo un paso de proyectar tu cultivo a la comunidad! Ahora puedes interactuar con nosotros compartiendo una fotografía de tus cultivos';
export const welcomeText2 = `Solo da clic en nuestro botón${'\n'}"Compartir imagen"${'\n'}para que todos puedan verla!`;

export const stomaResearches = [
  {
    title: 'Calabaza: Evaluación Chronos Life y Stoma-Or',
    url: 'http://161.35.105.244/ficha/INFORMETECNICOCALABAZA.pdf',
    img: Calabaza,
  },
  {
    title: 'Lechuga: Evaluación Chronos Life y Stoma Or',
    url: 'https://apicropsmanager.com/imagenes/ENSAYOLECHUGAEBIOS.pdf',
    img: Lechuga,
  },
  {
    title: 'Pepino: Evaluación Chronos Life y Stoma Or',
    url: 'https://apicropsmanager.com/imagenes/PEPINOCHRONOSTOMA.pdf',
    img: Pepino,
  },
  {
    title: 'Melón: Evaluación Chronos Life y Stoma Or',
    url: 'https://apicropsmanager.com/imagenes/CHRONOSTOMA.pdf',
    img: Melon,
  },
  {
    title: 'Papaya: Aplicación de Stoma-Or para evitar aborto de frutas',
    url:
      'http://161.35.105.244/ficha/DISMINUCIÓNDEABORTODEFRUTASPAPAYA(STOMAOR).pdf',
    img: Papaya,
  },
  {
    title:
      'Arándano: Demostración comercial de Stoma-Or bajo condiciones de estrés por alta temperatura en cultivo.',
    url:
      'http://161.35.105.244/ficha/ESTRESPORALTATEMPERATURAENARANDANOS(STOMAOR).pdf',
    img: Arandano,
  },
  {
    title: 'Chile Serrano: Evaluación Stoma-Or',
    url: 'http://161.35.105.244/ficha/REPORTETÉCNICOCHILESERRANO(STOMA).pdf',
    img: ChileS,
  },
];

export const chronosResearches = [
  {
    title: 'Calabaza: Evaluación Chronos Life y Stoma-Or',
    url: 'http://161.35.105.244/ficha/INFORMETECNICOCALABAZA.pdf',
    img: Calabaza1,
  },
  {
    title: 'Frambuesas: Estimulacion Generativa En El Cultivo Var. Evita',
    url: 'http://161.35.105.244/ficha/ENSAYOEstimulacionFrambuesaEvita.pdf',
    img: Frambuesas2,
  },
  {
    title: 'Lechuga: Evaluación Chronos Life y Stoma Or',
    url: 'https://apicropsmanager.com/imagenes/ENSAYOLECHUGAEBIOS.pdf',
    img: Lechuga,
  },
  {
    title: 'Pepino: Evaluación Chronos Life y Stoma Or',
    url: 'https://apicropsmanager.com/imagenes/PEPINOCHRONOSTOMA.pdf',
    img: Pepino,
  },
  {
    title: 'Melón: Evaluación Chronos Life y Stoma Or',
    url: 'https://apicropsmanager.com/imagenes/CHRONOSTOMA.pdf',
    img: Melon,
  },
  {
    title: 'Pimiento: Mayor cuaje y uniformidad en cultivo',
    url:
      'http://161.35.105.244/ficha/MAYORCUAJEYUNIFORMIDADPIMIENTO(CHRONOS).pdf',
    img: Pimiento,
  },
  {
    title: 'Fresa: Mayor calibre de fruta',
    url:
      'http://161.35.105.244/ficha/MAYORCALIBREDEFRUTACULTIVOFRESA(CHRONOS).pdf',
    img: Fresa,
  },
  {
    title: 'Arándano: Inducción de segundo flujo productivo en el cultivo',
    url:
      'http://161.35.105.244/ficha/INDUCCIÓNSEGUNDOFLUJOPRODUCTIVOARANDANOS.pdf',
    img: Arandano1,
  },
  {
    title: 'Maíz: Incremento de rendimiento',
    url: 'http://161.35.105.244/ficha/INCREMENTOPRODUCCIONMAIZ(CHRONOS).pdf',
    img: Maiz,
  },
  {
    title: 'Arándano: Estimulación generativa',
    url:
      'http://161.35.105.244/ficha/ESTIMULACIÓNGENERATIVAARANDANO(CHRONOS).pdf',
    img: Arandano2,
  },
  {
    title: 'Limón: Inducción floral en el cultivo',
    url: 'http://161.35.105.244/ficha/ENSAYOINDUCCIÓNFLORALLIMON(CHRONOS).pdf',
    img: Limon,
  },
  {
    title: 'Bell Pepper: Control de aborto de fruta',
    url:
      'http://161.35.105.244/ficha/CONTROLDEABORTODEFRUTABELLPEPPER(CHRONOS).pdf',
    img: Pimiento2,
  },
  {
    title: 'Rosal: Bioestimulación en cultivo',
    url:
      'http://161.35.105.244/ficha/BIOESTIMULACIONENCULTIVOROSAL(CHRONOS).pdf',
    img: Rosal,
  },
  {
    title: 'Agave: Aumento de grados Brix',
    url:
      'http://161.35.105.244/ficha/AUMENTOGRADOSBRIXAGAVEAZULTEQUILASIERRA(CHRONOS).pdf',
    img: Agave,
  },
  {
    title: 'Arándano: Aumento de tamaño de fruto',
    url: 'http://161.35.105.244/ficha/AUMENTODETAMAÑOARANDANO(CHRONOS).pdf',
    img: Arandano3,
  },
  {
    title: 'Agave Weber Tequilana: Aumento de grados Brix',
    url:
      'http://161.35.105.244/ficha/AUMENTODEGRADOSBRIXAGAVETEQLASIERRACHRONOS.pdf',
    img: Agave2,
  },
  {
    title:
      'Frambuesa var. Jazmín: Demostración comercial producto Chronos Life para el aumento de cargadores y calidad de cosecha en radicular y foliar',
    url:
      'http://161.35.105.244/ficha/AUMENTODECARGADORESFRAMBUESASLOS4BERRYMEXCHRONOS.pdf',
    img: Frambuesa,
  },
  {
    title: 'Agave: Desarrollo bioestimulación',
    url: 'http://161.35.105.244/ficha/AUMENTONUMEROHOJASAGAVE(CHRONOS).pdf',
    img: Agave3,
  },
];
