'use strict';

const RegisterCard= (update) => {
  const sectionCard = $('<section id="section-card" class="container"></section>');
  const titleCard = $('<h3>Registra tu tarjeta débito BCP</h3>');
  const detailCard = $('<h5>Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles</h5>');
  const formCard = $('<form class="margin-datos"></form>');
  const inputs1 = $('<div class="inputs"></div>');

  const icon = $('<label class="label" for="nro-card"><img class="icon-img" src="img/icons/card.png"></label>');
  const inputCard = $('<input id="nro-card" type="number">');
  const escanear = $('<h5 class="color-turq"><img class="icon-small" src="img/icons/scan.png"> Escanear tarjeta</h5>');

  const vto = $('<label for="month" class="float-left"><h5 class="text-left">Fecha de vencimiento </h5></label>');
  const date = $('<div class="float-right"></div>');
  const month = $('<input id="month" type="number" placeholder="Mes">');
  const separador = $('<span> / </span>');
  const year = $('<input id="year" type="number" placeholder="Año">');
  const btnCard = $('<button>continuar</button>');

  sectionCard.append(Header('bcp-logo'));
  sectionCard.append(titleCard);
  sectionCard.append(detailCard);
  sectionCard.append(formCard);
  formCard.append(inputs1);
  inputs1.append(icon);
  inputs1.append(inputCard);
  formCard.append(escanear);
  formCard.append(vto);
  formCard.append(date);
  date.append(month);
  date.append(separador);
  date.append(year);
  sectionCard.append(btnCard);

  btnCard.on('click', (e) => {
    e.preventDefault();

    state.pages = 6;
    update();

  });

  return sectionCard;

};

const KeyCard= (update) => {
  const sectionKey = $('<section id="section-key" class="container"></section>');
  const titleKey = $('<h3>Ingresa la clave de tu tarjeta</h3>');
  const detailKey = $('<h5>Tarjeta **** num</h5>');
  const formKey = $('<form></form>');
  const inputs2 = $('<div class="inputs"></div>');
  const icon1 = $('<label class="label" for="user-password"><img class="icon-img" src="img/icons/lock.png"></label>');
  const inputKey = $('<input id="nro-Key" type="password">');
  const btnKey = $('<button>registrar</button>');

  sectionKey.append(Header('bcp-logo'));
  sectionKey.append(titleKey);
  sectionKey.append(detailKey);
  sectionKey.append(formKey);
  formKey.append(inputs2);
  inputs2.append(icon1);
  inputs2.append(inputKey);
  sectionKey.append(btnKey);

  btnKey.on('click', (e) => {
    e.preventDefault();

    state.pages = 7;
    update();

  });

  return sectionKey;

};