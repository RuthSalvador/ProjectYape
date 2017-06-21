'use strict';

const CreateUser = () => {
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

  return sectionUser;

};