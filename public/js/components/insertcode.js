'use strict';

const InsertCode = (update) => {
  const sectionCode = $('<section id="section-code" class="container"></section>');
  const titleCode = $('<h3>Ahora ingresa tu código</h3>');
  const detailCode = $('<p>Enviamos un SMS con el código de validación al número </p>');
  const spanCel = $('<span>celular</span>');
  const formCode = $('<form></form>');
  const inputCode= $('<input type="number">');
  const reintentar = $('<p>Reintentar en </p>');
  const spanContador = $('<span>regresiva</span>');

  sectionCode.append(Header('message'));
  sectionCode.append(titleCode);
  sectionCode.append(detailCode);
  detailCode.append(spanCel);
  sectionCode.append(formCode);
  formCode.append(inputCode);
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