'use strict';

const InsertCode = (update) => {
  const sectionCode = $('<section id="section-code" class="container"></section>');
  const titleCode = $('<h3>Ahora ingresa tu código</h3>');
  const detailCode = $('<h5>Enviamos un SMS con el código de validación al número </h5>');
  const spanCel = $('<span>celular</span>');
  const formCode = $('<form></form>');
  const inputs = $('<div class="inputs"></div>');
  const icon = $('<label class="label" for="code"><img class="icon-img" src="img/icons/lock.png"></label>');
  const inputCode= $('<input id="code" type="number" placeholder="- - - - - -">');
  const reintentar = $('<h5>Reintentar en <img class="icon-small" src="img/icons/clock.png"></h5>');
  const spanContador = $('<span>regresiva</span>');

  sectionCode.append(Header('message'));
  sectionCode.append(titleCode);
  sectionCode.append(detailCode);
  detailCode.append(spanCel);
  sectionCode.append(formCode);
  formCode.append(inputs);
  inputs.append(icon);
  inputs.append(inputCode);
  formCode.append(reintentar);
  reintentar.append(spanContador);

  const prueba = $('<button>prueba</button>');
  sectionCode.append(prueba);

  prueba.on('click', (e) => {
    e.preventDefault();

    state.pages = 3;
    update();

  });

  return sectionCode;
};