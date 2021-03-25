//main stack
import Logos from '../Screens/Logos';
import Splash from '../Screens/Splash';
import Comunidad from '../Screens/Comunidad';
import VentaProductos from '../Screens/VentaProductos';
import Upload from '../Screens/Upload';
import Confirmacion from '../Screens/Confirmacion';
import Login from '../Screens/Login';
import Registro from '../Screens/Registro';
//chronos cultivos stack
import Agave from '../Screens/Cultivos/Agave';
import Aguacate from '../Screens/Cultivos/Aguacate';
import Ajo from '../Screens/Cultivos/Ajo';
import Alfalfa from '../Screens/Cultivos/Alfalfa';
import Apio from '../Screens/Cultivos/Apio';
import Arroz from '../Screens/Cultivos/Arroz';
import Banano from '../Screens/Cultivos/Banano';
import Berries from '../Screens/Cultivos/Berries';
import Brocoli from '../Screens/Cultivos/Brocoli';
import Cafe from '../Screens/Cultivos/Cafe';
import Calabaza from '../Screens/Cultivos/Calabaza';
import Caña from '../Screens/Cultivos/Caña';
import Cebolla from '../Screens/Cultivos/Cebolla';
import Chiles from '../Screens/Cultivos/Chiles';
import Esparrago from '../Screens/Cultivos/Esparrago';
import Fresa from '../Screens/Cultivos/Fresa';
import Frijol from '../Screens/Cultivos/Frijol';
import Limon from '../Screens/Cultivos/Limon';
import Maiz from '../Screens/Cultivos/Maiz';
import Mango from '../Screens/Cultivos/Mango';
import Melon from '../Screens/Cultivos/Melon';
import Ornamentales from '../Screens/Cultivos/Ornamentales';
import Papa from '../Screens/Cultivos/Papa';
import Papaya from '../Screens/Cultivos/Papaya';
import Pepino from '../Screens/Cultivos/Pepino';
import Piña from '../Screens/Cultivos/Piña';
import Sandia from '../Screens/Cultivos/Sandia';
import Tomate from '../Screens/Cultivos/Tomate';
import Trigo from '../Screens/Cultivos/Trigo';
import Zanahoria from '../Screens/Cultivos/Zanahoria';
import Uva from '../Screens/Cultivos/Uva';
import Manzana from '../Screens/Cultivos/Manzana';
import Naranja from '../Screens/Cultivos/Naranja';
import Nogal from '../Screens/Cultivos/Nogal';

//stoma cultivos stack
import Stoma from '../Screens/Stoma';

//distribuidores
import Distribuidor1 from '../Screens/Distribuidores/Distribuidor1';
import Distribuidor2 from '../Screens/Distribuidores/Distribuidor2';
import Distribuidor3 from '../Screens/Distribuidores/Distribuidor3';
import Distribuidor4 from '../Screens/Distribuidores/Distribuidor4';

//home drawer
import Home from '../Screens/Home';

//stacks
import {CultivosCStack} from '../Components/Navigator/Chronos/CultivosStack';
import {CultivosSStack} from '../Components/Navigator/Stoma/CultivosStack';
import {DistributorsStack} from '../Components/Navigator/DistributorStack';

import {StomaDrawer} from '../Components/Navigator/Stoma/StomaDrawer';
import {ChronosDrawer} from '../Components/Navigator/Chronos/ChronosDrawer';

export const mainStack = [
  {
    name: 'Splash',
    component: Splash,
    label: 'Splash',
    shown: false,
  },
  {
    name: 'Logos',
    component: Logos,
    label: 'Splash',
    shown: false,
  },
  {
    name: 'Comunidad',
    component: Comunidad,
    label: 'Amigos de los Amaneceres',
    shown: true,
  },
  {
    name: 'Upload',
    component: Upload,
    label: 'Amigos de los Amaneceres',
    shown: true,
  },
  {
    name: 'Ventas',
    component: VentaProductos,
    label: 'Venta de Productos',
    shown: true,
  },
  {
    name: 'Confirmacion',
    component: Confirmacion,
    label: 'Confirmación de pedido',
    shown: true,
  },
  {
    name: 'Login',
    component: Login,
    label: 'Iniciar Sesión',
    shown: true,
  },
  {
    name: 'Registro',
    component: Registro,
    label: 'Registro',
    shown: true,
  },
  {
    name: 'DrawerChronos',
    component: ChronosDrawer,
    label: 'Chronos',
    shown: false,
  },
  {
    name: 'DrawerStoma',
    component: StomaDrawer,
    label: 'Stoma-OR',
    shown: false,
  },
];
export const chronosCStack = [
  {
    name: 'Agave',
    component: Agave,
  },
  {
    name: 'Aguacate',
    component: Aguacate,
  },
  {
    name: 'Ajo',
    component: Ajo,
  },
  {
    name: 'Alfalfa',
    component: Alfalfa,
  },
  {
    name: 'Apio, Espinaca, Lechuga',
    component: Apio,
  },
  {
    name: 'Arroz',
    component: Arroz,
  },
  {
    name: 'Banano',
    component: Banano,
  },
  {
    name: 'Berries',
    component: Berries,
  },
  {
    name: 'Brócoli',
    component: Brocoli,
  },
  {
    name: 'Café',
    component: Cafe,
  },
  {
    name: 'Calabaza',
    component: Calabaza,
  },
  {
    name: 'Caña',
    component: Caña,
  },
  {
    name: 'Cebolla',
    component: Cebolla,
  },
  {
    name: 'Chiles',
    component: Chiles,
  },
  {
    name: 'Espárrago',
    component: Esparrago,
  },
  {
    name: 'Fresa',
    component: Fresa,
  },
  {
    name: 'Frijol, Soya y Garbanzo',
    component: Frijol,
  },
  {
    name: 'Limón',
    component: Limon,
  },
  {
    name: 'Maíz',
    component: Maiz,
  },
  {
    name: 'Mango',
    component: Mango,
  },
  {
    name: 'Manzana',
    component: Manzana,
  },
  {
    name: 'Melón',
    component: Melon,
  },
  {
    name: 'Naranja',
    component: Naranja,
  },
  {
    name: 'Nogal',
    component: Nogal,
  },
  {
    name: 'Ornamentales',
    component: Ornamentales,
  },
  {
    name: 'Papa',
    component: Papa,
  },
  {
    name: 'Papaya',
    component: Papaya,
  },
  {
    name: 'Pepino',
    component: Pepino,
  },
  {
    name: 'Piña',
    component: Piña,
  },
  {
    name: 'Sandía',
    component: Sandia,
  },
  {
    name: 'Tomate',
    component: Tomate,
  },
  {
    name: 'Trigo',
    component: Trigo,
  },
  {
    name: 'Uva',
    component: Uva,
  },
  {
    name: 'Zanahoria',
    component: Zanahoria,
  },
];

export const stomaCStack = [
  {
    name: 'Stoma-Or',
    component: Stoma,
  },
];

export const DistributorStack = [
  {
    name: 'Colima',
    component: Distribuidor1,
  },
  {
    name: 'Veracrúz',
    component: Distribuidor2,
  },
  {
    name: 'Chiapas',
    component: Distribuidor3,
  },
  {
    name: 'Jalisco, Michoacán y Bajío',
    component: Distribuidor4,
  },
];

export const drawerChronos = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Cultivos',
    component: CultivosCStack,
  },
  {
    name: 'Distribuidores',
    component: DistributorsStack,
  },
];

export const drawerStoma = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Cultivos',
    component: CultivosSStack,
  },
  {
    name: 'Distribuidores',
    component: DistributorsStack,
  },
];
