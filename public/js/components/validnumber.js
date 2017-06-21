'use strict';

const ValidNumber = (update) => {
  const sectionNumber = $('<section id="section-number" class="container"></section>');
  const titleNumber = $('<h3>Para comenzar validemos tu número</h3>');
  const detailNumber = $('<h5>Recibirás un SMS con un código de validación</h5>');
  const formNumber = $('<form></form>');
  const inputs = $('<div class="inputs"></div>');
  const inputCel = $('<input id="cel-number" type="number">');
  const icon = $('<label class="label" for="cel-number"><img class="icon-img" src="img/icons/phoneandnumber.png"></label>');
  const check = $('<h5 class="text-left"><input id="terminos" type="checkbox"><label for="terminos">Acepto los <span class="color-turq">Términos y condiciones.</span></label></h5>');
  const btnNumero = $('<button>continuar</button>');

  sectionNumber.append(Header('phone'));
  sectionNumber.append(titleNumber);
  sectionNumber.append(detailNumber);
  sectionNumber.append(formNumber);
  formNumber.append(inputs);
  inputs.append(inputCel);
  inputs.append(icon);
  formNumber.append(check);
  sectionNumber.append(btnNumero);



  btnNumero.on('click', (e) => {
    e.preventDefault();

    state.pages = 2;
    update();

  });

  return sectionNumber;

};


