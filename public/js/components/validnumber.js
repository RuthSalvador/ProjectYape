'use strict';

const ValidNumber = (update) => {
  const sectionNumber = $('<section id="section-number" class="container"></section>');
  const titleNumber = $('<h3>Para comenzar validemos tu número</h3>');
  const detailNumber = $('<h5>Recibirás un SMS con un código de validación</h5>');
  const formNumber = $('<form></form>');
  const inputs = $('<div class="inputs"></div>');
  const inputCel = $('<input id="cel-number" type="cel" pattern="[0-9]{9}" maxlength="9">');
  const icon = $('<label class="label" for="cel-number"><img class="icon-img" src="img/icons/phoneandnumber.png"></label>');
  const h5 = $('<h5 class="text-left"></h5>');
  const check = $('<input id="terminos" type="checkbox">');
  const label = $('<label for="terminos">Acepto los <span class="color-turq">Términos y condiciones.</span></label>');
  const btnNumero = $('<button>continuar</button>');

  sectionNumber.append(Header('phone'));
  sectionNumber.append(titleNumber);
  sectionNumber.append(detailNumber);
  sectionNumber.append(formNumber);
  formNumber.append(inputs);
  inputs.append(inputCel);
  inputs.append(icon);
  formNumber.append(h5);
  h5.append(check);
  h5.append(label);
  sectionNumber.append(btnNumero);


  inputCel.on('change',() => {
    check.on('change', () => {

      btnNumero.attr('class','btn-act');

      btnNumero.on('click', (e) => {
        e.preventDefault();
        celularPost(inputCel.val(),true);

        state.pages = 2;

        update();


      });
    });
  });

  check.on('change', () => {
    inputCel.on('change',() => {

      btnNumero.attr('class','btn-act');

      btnNumero.on('click', (e) => {
        e.preventDefault();

        celularPost(inputCel.val(),true);

        state.pages = 2;
        update();

      });
    });

  });

  return sectionNumber;

};

const celularPost = (inputCel,det)=>{

  $.post('http://localhost:3000/api/registerNumber',{
    phone : inputCel,
    terms : det
  },(data)=>{
    console.log(data);

    console.log(data.data.phone);
    console.log(data.data.code);

    //alert(data.data.code);
    state.userphone = data.data.phone;
    state.usercode = data.data.code;

    console.log(state.userphone);
    console.log(state.usercode);
  });
};

