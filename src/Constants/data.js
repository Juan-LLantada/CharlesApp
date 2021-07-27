//socials
import {Facebook, Instagram, Whatsapp, Mail} from './Icons/socials';
//sales
import {Diagnosis, Engine, Hands, Rentability, Oportunity} from './Icons/sales';
//logos
import {ChronosIcon, StomaIcon, Amaneceres, Bios} from './Icons/logos';
//side bar
//chronos
import {CULTIVOS} from './Icons/sidebarcultivos';
//design
import {Productos} from './Icons/design';
import {width} from './styles';

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
//fb://page/217737019108773
export const chronosSideBar = [
  {title: 'CULTIVOS', list: sideCultivosChronos},
  {title: 'DISTRIBUIDORES', list: sideDistChronos},
];

export const stomaSideBar = [
  {title: 'CULTIVOS', list: sideCultivosStoma},
  {title: 'DISTRIBUIDORES', list: sideDistChronos},
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
  {title: 'PÁGINA WEB', Icon: Bios, url: 'https://epsilonbios.com'},
  {
    title: 'WHATSAPP',
    Icon: Whatsapp,
    url: 'whatsapp://send?text= Hola, tengo una duda! &phone=5213318659920',
  },
  {
    title: 'CORREO',
    Icon: Mail,
    url:
      'mailto:Alopez@epsilonbios.com?&subject=Contacto&body=Hola, tengo una duda!',
  },
  {
    title: 'FACEBOOK',
    Icon: Facebook,
    url: 'https://www.facebook.com/EpsilonBios',
  },
  {
    title: 'INSTAGRAM',
    Icon: Instagram,
    url: 'https://instagram.com/epsilonbios?igshid=im2vgkdiytwc',
  },
];

export const welcomeText1 =
  'Estás a solo un paso de proyectar tu cultivo a la comunidad! Ahora puedes interactuar con nosotros compartiendo una fotografía de tus cultivos';
export const welcomeText2 = `Solo da clic en nuestro botón${'\n'}"Compartir imagen"${'\n'}para que todos puedan verla!`;
