/*const getUsers = (callback) => {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load',_ => {
    if (xhr.status != 200) callback(new Error("Error al obtener datos"));
    callback(null,xhr.response);
  });

  xhr.open('GET','api');
  xhr.responseType = 'json';
  xhr.send();
};

*/





/*
const CodePost = (query) => {
  state.users.data.phone = query;

  $.post('http://localhost:3000/api/resendCode', {
    "phone" : query
  }, (data) => {
    console.log(data);
  });
};*/
