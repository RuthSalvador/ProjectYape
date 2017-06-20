'use strict';

const ValidNumber = () => {
  const sectionNumber = $('<section class="container"></section>');
  const h3 = $('<h3>Para comenzar validemos tu número</h3>');
  const detail = $('<p>Recibirás un SMS con un código de validación</p>');
  const inputCel = $('<input id="cel-number" type="tel">');
  const check = $('<input id="terminos" type="checkbox">');
  const labelCheck = $('<label for="terminos">Acepto los <span class="color-turq">Términos y condiciones</span></label>')
  const btnNumero = $('<button>continuar</button>')

  sectionNumber.append(h3);
  sectionNumber.append(detail);
  sectionNumber.append(inputCel);
  sectionNumber.append(check);
  sectionNumber.append(labelCheck);
  sectionNumber.append(btnNumero);

  return sectionNumber;


};