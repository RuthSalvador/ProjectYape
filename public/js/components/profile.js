'use strict';

const Profile = () => {
  const sectionProfile = $('<section id="section-profile"></section>');
  const topProfile = $('<div class="top-profile"></div>');
  const settings = $('<img class="icon-img icon-top-right" src="img/icons/engine.png">');
  const face = $('<img class="img-profile" src="img/icons/happy-face.png">');
  const figcaption = $('<figcaption class="color-white">Hola</figcaption>');
  const saldo = $('<h5 class="color-turq"><img class="icon-small" src="img/icons/eye.png"> Mostrar saldo</h5>');
  const bottomProfile = $('<div class="bottom-profile"></div>');
  const move = $('<div class="move"></div>');
  const moveText = $('<h5 class="color-white float-left">ÚLTIMOS MOVIMIENTOS</h5>');
  const spanMove = $('<img class="icon-next float-right" src="img/icons/right-arrow-circular-button.png">');
  const first = $('<div class="first"></div>');
  const imgFirst = $('<img class="img-profile" src="img/icons/icon.png">');
  const detailFirst = $('<div><h5 class="color-white text-left">¿Aún no realizas tu primer pago?</h5><h5 class="color-white text-left text-light">Es rápido y sencillo</h5></div>');
  const sendPay = $('<figure class="float-left margin-42"><img class="img-other" src="img/icons/send.png"><figcaption><h5 class="color-white">ENVIAR PAGO</h5></figcaption></figure>');
  const receivePay = $('<figure class="float-right margin-42"><img class="img-other" src="img/icons/code-qr.png"><figcaption><h5 class="color-white">RECIBIR PAGO</h5></figcaption></figure>');

  sectionProfile.append(topProfile);
  topProfile.append(settings);
  topProfile.append(face);
  topProfile.append(figcaption);
  topProfile.append(saldo);
  sectionProfile.append(bottomProfile);
  bottomProfile.append(move);
  move.append(moveText);
  move.append(spanMove);
  bottomProfile.append(first);
  first.append(imgFirst);
  first.append(detailFirst);
  bottomProfile.append(sendPay);
  bottomProfile.append(receivePay);

  return sectionProfile;



};