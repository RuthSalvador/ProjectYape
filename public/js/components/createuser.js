'use strict';

const CreateUser = (update) => {
  const sectionUser = $('<section id="section-user" class="container"></section>');
  const titleUser = $('<h3>Crea tu usuario Yape</h3>');
  const detailUser = $('<h5>Ingresa un nombre, email y clave de usuario.</h5>');

  const formUser = $('<form id="form-user"></form>');
  const inputs1 = $('<div class="inputs margin-datos"></div>');
  const icon1 = $('<label class="label" for="user-name"><img class="icon-img" src="img/icons/user.png"></label>');
  const userName = $('<input id="user-name" type="text" placeholder="Nombre">');

  const inputs2 = $('<div class="inputs margin-datos"></div>');
  const icon2 = $('<label class="label" for="user-email"><img class="icon-img" src="img/icons/message-gray.png"></label>');
  const userEmail = $('<input id="user-email" type="email" placeholder="correo@ejemplo.com">');

  const inputs3 = $('<div class="inputs"></div>');
  const icon3 = $('<label class="label" for="user-password"><img class="icon-img" src="img/icons/lock.png"></label>');
  const userPassword = $('<input id="user-password" type="password" placeholder="Ingresa clave de 6 dígitos">');

  const cuida = $('<h5>Cuida esta clave como oro, es tu acceso a Yape.</h5>');
  const btnCreate = $('<button>crear cuenta</button>');

  sectionUser.append(Header('lockone'));
  sectionUser.append(titleUser);
  sectionUser.append(detailUser);
  sectionUser.append(formUser);
  formUser.append(inputs1);
  formUser.append(inputs2);
  formUser.append(inputs3);
  inputs1.append(icon1);
  inputs2.append(icon2);
  inputs3.append(icon3);
  inputs1.append(userName);
  inputs2.append(userEmail);
  inputs3.append(userPassword);
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
  const iconSuccess = $('<img class="icon-check" src="img/icons/check.png">');
  const bien = $('<h4>¡Bien!</h4><h4>Ahora puedes usar Yape</h4>');

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