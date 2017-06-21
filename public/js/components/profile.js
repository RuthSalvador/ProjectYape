'use strict';

const Profile = () => {
  const sectionProfile = $('<section id="section-profile" class="container"></section>');
  const topProfile = $('<div></div>');
  const settings = $('<img src="img/icons/engine.png">');
  const face = $('<img src="img/icons/happy-face.png">');
  const figcaption = $('<figcaption>Hola</figcaption>');
  const saldo = $('<img src="img/icons/eye.png"><span class="color-turq">Mostrar saldo</span>');
  const bottomProfile = $('<div></div>');
  const move = $('<div></div>');
  const moveText = $('<p>ÚLTIMOS MOVIMIENTOS</p>');
  const spanMove = $('<span>next</span>');
  const first = $('<div></div>');
  const imgFirst = $('<img src="img/icons/icon.png">');
  const detailFirst = $('<p><b>¿Aún no realizas tu primer pago?</b></p><p>Es rápido y sencillo</p>');
  const sendPay = $('<img src="img/icons/send.png">');
  const receivePay = $('<img src="img/icons/code-qr.png">');

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