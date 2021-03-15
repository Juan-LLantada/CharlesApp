export function getPhotoList() {
  let value = fetch('http://161.35.105.244/api/archivos/imagenes/files', {
    method: 'GET',
  })
    .then(res => {
      let statusCode = res.status;
      const data = res.json();
      return Promise.all([statusCode, data]);
    })
    .then(json => {
      console.log('AQUI JSON');
      console.log(json);
      let urls = [];
      for (var i in json[1]) {
        let string = `http://161.35.105.244/imagenes/${json[1][i].name}`;
        urls.push(string);
        console.log(string);
      }
      return urls;
    })
    .catch(error => {
      console.log('upload error', error);
    });
  return value;
}
