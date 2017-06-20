'use strict';

const Header = (icono) => {
  const figure = $('<figure class="figure-icon"></figure>');
  const imagen =$('<img class="header-icon" src="img/icons/' + icono +'.png">');

  figure.append(imagen);

  return figure;
};
