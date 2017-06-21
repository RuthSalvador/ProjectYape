'use strict';

const InsertCode = () => {
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

  return sectionCode;
};