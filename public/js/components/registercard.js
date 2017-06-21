'use strict';

const RegisterCard= (update) => {
  const sectionCard = $('<section id="section-card" class="container"></section>');
  const titleCard = $('<h3>Registra tu tarjeta débito BCP</h3>');
  const detailCard = $('<p>Por ahora solo aceptamos cuentas de ahorro y/o corriente en soles</p>');
  const formCard = $('<form></form>');
  const inputCard = $('<input id="nro-card" type="number">');
  const escanear = $('<p class="color-turq">Escanear tarjeta</p>');
  const vto = $('<label for="month"></label>');
  const month = $('<input id="month" placeholder="Mes">');
  const separador = $('<span> / </span>');
  const year = $('<input placeholder="Año">');
  const btnCard = $('<button>continuar</button>');

  sectionCard.append(Header('bcp-logo'));
  sectionCard.append(titleCard);
  sectionCard.append(detailCard);
  sectionCard.append(formCard);
  formCard.append(inputCard);
  formCard.append(escanear);
  formCard.append(vto);
  formCard.append(month);
  formCard.append(separador);
  formCard.append(year);
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
  const detailKey = $('<p>Tarjeta </p>');
  const spanCard = $('<span>**card</span>');
  const formKey = $('<form></form>');
  const inputKey = $('<input id="nro-Key" type="number">');
  const btnKey = $('<button>registrar</button>');

  sectionKey.append(Header('bcp-logo'));
  sectionKey.append(titleKey);
  sectionKey.append(detailKey);
  detailKey.append(spanCard);
  formKey.append(inputKey);
  sectionKey.append(btnKey);

  btnKey.on('click', (e) => {
    e.preventDefault();

    state.pages = 7;
    update();

  });

  return sectionKey;

};