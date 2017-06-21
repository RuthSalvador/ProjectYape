'use strict';

const CreateUser = (update) => {
  const sectionUser = $('<section id="section-user" class="container"></section>');
  const titleUser = $('<h3>Crea tu usuario Yape</h3>');
  const detailUser = $('<p>Ingresa un nombre, email y clave de usuario.</p>');

  const formUser = $('<form></form>');
  const labelName = $('<label>icon</label>');
  const userName = $('<input id="user-name" type="text">');
  const userEmail = $('<input id="user-email" type="email">');
  const userPassword = $('<input id="user-password" type="password">');
  const cuida = $('<p>Cuida esta clave como oro, es tu acceso a Yape.</p>');
  const btnCreate = $('<button>crear cuenta</button>');

  sectionUser.append(Header('lockone'));
  sectionUser.append(titleUser);
  sectionUser.append(detailUser);
  sectionUser.append(formUser);
  formUser.append(labelName);
  formUser.append(userName);
  formUser.append(userEmail);
  formUser.append(userPassword);
  formUser.append(cuida);
  sectionUser.append(btnCreate);

  btnCreate.on('click', (e) => {
    e.preventDefault();

    state.pages = 4;
    update();

  });

  return sectionUser;

};

const SuccessRegis = (update) => {
  const sectionSuccess = $('<section id="section-success"></section>');
  const iconSuccess = $('<span>icon</span>');
  const bien = $('<p>¡Bien!</p><p>Ahora puedes usar Yape</p>');

  sectionSuccess.append(iconSuccess);
  sectionSuccess.append(bien);


  const prueba2= $('<button>prueba2</button>');
  sectionSuccess.append(prueba2);

  prueba2.on('click', (e) => {
    e.preventDefault();

    state.pages = 5;
    update();

  });

  return sectionSuccess;
};