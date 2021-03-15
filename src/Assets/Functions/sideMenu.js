export function logedRoutes(name, navigation) {
  if (name == 'VentaProductos') {
    access ? (name = name) : (name = 'OffLine');
  } else if (name == 'Comunidad') {
    access ? (name = name) : (name = 'OffLine');
  } else if (name == 'Inicia/Cierra sesión') {
    access ? (name = 'LogOut') : (name = 'Login');
  } else if (name == 'Jalisco, Michoacán y Bajío') {
    name = 'Distribuidor1';
  } else {
    name = name;
  }
  navigation.navigate(routename);
}

export function offLineRoutes(name) {
  if (name == 'VentaProductos') {
    name = 'OffLine';
  } else if (name == 'Comunidad') {
    name = 'OffLine';
  } else if (name == 'Jalisco, Michoacán y Bajío') {
    name = 'Distribuidor1';
  } else {
    name = name;
  }
}
