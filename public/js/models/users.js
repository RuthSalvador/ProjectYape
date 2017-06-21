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

/*const getUser = (id,callback) => {
  $.get('api/users/'+id,(apiUsers) => {
    if (data.status != 200) callback(new Error("Error al obtener la peli"));
    callback(null,data);
  })
};
*/

const celularPost = (query,status)=>{
  'use strict';

  $.post('http://localhost:3000/api/registerNumber',{
    "phone" : query,
    "terms" : status
  },(data)=>{
    console.log(data);
  });

}

