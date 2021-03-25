export function DELETE(endpoint) {
  let post = fetch(`http://161.35.105.244/api/${endpoint}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      let statusCode = res.status;
      const data = res.json();
      return Promise.all([statusCode, data]);
    })
    .then(json => {
      return json;
    })
    .catch(err => {
      console.log('ERROR DELTE');
      //alert('Error', 'Hubo un error al eliminar el campo.');
    });

  return post;
}

export function GET(endpoint) {
  let post = fetch(`http://161.35.105.244/api/${endpoint}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      let statusCode = res.status;
      const data = res.json();
      return Promise.all([statusCode, data]);
    })
    .then(json => {
      return json;
    })
    .catch(err => {
      console.log('ERROR GET');
      // alert('Error', 'Hubo un error al obtener los datos.');
    });

  return post;
}

export function POST(data, endpoint) {
  let post = fetch(`http://161.35.105.244/api/${endpoint}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => {
      let statusCode = res.status;
      const data = res.json();
      return Promise.all([statusCode, data]);
    })
    .then(json => {
      return json;
    })
    .catch(err => {
      console.log('ERROR POST');
      //  alert('Error', 'Hubo un error al obtener los datos.');
    });

  return post;
}

export function POST2(data, endpoint) {
  let post = fetch(`http://161.35.105.244/api/${endpoint}`, {
    method: 'POST',
    body: data,
  })
    .then(json => {
      console.log('AQUI JSON');
      console.log(json);
      return json;
    })
    .catch(err => {
      console.log(err);
      console.log('ERROR POST2');
      //alert('Error', 'Hubo un error al obtener los datos.');
    });

  return post;
}

export function PATCH(data, endpoint) {
  let post = fetch(`http://161.35.105.244/api/${endpoint}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => {
      let statusCode = res.status;
      const data = res.json();
      return Promise.all([statusCode, data]);
    })
    .then(json => {
      return json;
    })
    .catch(err => {
      console.log('ERROR PATCH');
      // alert('Error', 'Hubo un error al obtener los datos.');
    });

  return post;
}
