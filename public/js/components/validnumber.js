'use strict';

const ValidNumber = (update) => {
  const sectionNumber = $('<section id="section-number" class="container"></section>');
  const titleNumber = $('<h3>Para comenzar validemos tu número</h3>');
  const detailNumber = $('<p>Recibirás un SMS con un código de validación</p>');
  const formNumber = $('<form></form>');
  const inputCel = $('<input id="cel-number" type="tel">');
  const check = $('<input id="terminos" type="checkbox">');
  const labelCheck = $('<label for="terminos">Acepto los <span class="color-turq">Términos y condiciones</span></label>');
  const btnNumero = $('<button>continuar</button>');

  sectionNumber.append(Header('phone'));
  sectionNumber.append(titleNumber);
  sectionNumber.append(detailNumber);
  sectionNumber.append(formNumber);
  formNumber.append(inputCel);
  formNumber.append(check);
  formNumber.append(labelCheck);
  sectionNumber.append(btnNumero);

  btnNumero.on('click', (e) => {
    e.preventDefault();

    state.pages = 2;
    update();

  });

  return sectionNumber;

};
