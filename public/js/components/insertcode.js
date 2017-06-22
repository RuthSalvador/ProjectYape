'use strict';

//console.log(state.userphone); no agarraaaa!
//console.log(data.data.phone);

const InsertCode = (update) => {
  const sectionCode = $('<section id="section-code" class="container"></section>');
  const titleCode = $('<h3>Ahora ingresa tu código</h3>');
  const detailCode = $('<h5>Enviamos un SMS con el código de validación al número </h5>');
  const spanCel = $('<span><b>'+ state.userphone +'</b></span>');
  const formCode = $('<form></form>');
  const inputs = $('<div class="inputs"></div>');
  const icon = $('<label class="label" for="code"><img class="icon-img" src="img/icons/lock.png"></label>');
  const inputCode= $('<input id="code" type="number" placeholder="- - - - - -">');
  const reintentar = $('<h5 id="#reintentar"></h5>');

  sectionCode.append(Header('message'));
  sectionCode.append(titleCode);
  sectionCode.append(detailCode);
  detailCode.append(spanCel);
  sectionCode.append(formCode);
  formCode.append(inputs);
  inputs.append(icon);
  inputs.append(inputCode);
  formCode.append(reintentar);

  const prueba = $('<button>prueba</button>');
  sectionCode.append(prueba);

//setInterval()

  let spanContador = 21;
  let interval = setInterval(_ => {
    spanContador--;
    //reintentar.append(spanContador);
    reintentar.html('Reintentar en <img class="icon-small" src="img/icons/clock.png">'+ spanContador);

    if (spanContador == 0) {
      clearInterval(interval);
    }
  }, 1000);

  inputCode.on('change', () => {

    prueba.attr('class','btn-act');
    prueba.on('click', (e) => {
      e.preventDefault();

      state.pages = 3;
      update();

    });
  });

  return sectionCode;
};