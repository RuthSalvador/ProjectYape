'use strict';

const Home = () => {
  const sectionHome = $('<section id="home"></section>');
  const carousel = $('<div id="slides"></div>');

  const slide1 = $('<div class="slide"></div>');
  const img1 =$('<img class="slides-img" src="img/icons/group-people.png">');
  const title1 = $('<h2>Gratis y Seguro</h2>');
  const subTitle1 = $('<p class="color-gray">La transferencia es inmediata y gratuita de una cuenta a otra.</p>');

  const slide2 = $('<div class="slide"></div>');
  const img2 =$('<img class="slides-img" src="img/icons/icon-people.png">');
  const title2 = $('<h2>Paga a tus amigos</h2>');
  const subTitle2 = $('<p class="color-gray">Paga a quien quieras desde donde quieras, sin usar efectivo.</p>');

  const slide3 = $('<div class="slide"></div>');
  const img3 =$('<img class="slides-img" src="img/icons/happy-person.png">');
  const title3 = $('<h2>Sin número de cuenta</h2>');
  const subTitle3 = $('<p class="color-gray">Elige a quién pagar desde tu lista de contactos.</p>');

  const previous = $('<div id="previous">&#60;</div>');
  const next = $('<div id="next">&#62;</div>');
  const registrarme = $('<button class="btn-act">registrarme</button>');

  sectionHome.append(carousel);
  carousel.append(slide1);
  carousel.append(slide2);
  carousel.append(slide3);
  slide1.append(img1);
  slide2.append(img2);
  slide3.append(img3);
  slide1.append(title1);
  slide2.append(title2);
  slide3.append(title3);
  slide1.append(subTitle1);
  slide2.append(subTitle2);
  slide3.append(subTitle3);
  sectionHome.append(previous);
  sectionHome.append(next);
  sectionHome.append(registrarme);

  $("#slides div:last").insertBefore("#slides div:first");
  carousel.css("margin-left", "-"+100+"%");

  previous.on("click",() => {
    carousel.animate({
      marginLeft:0
    }, 400, () => {
      $("#slides div:last").insertBefore("#slides div:first");
      carousel.css("margin-left", "-"+100+"%");
    });
  });

  function moveNext(){
    carousel.animate({
      marginLeft:"-"+200+"%"
    }, 400, () => {
      $("#slides .slide:first").insertAfter("#slides div:last");
      carousel.css("margin-left", "-"+100+"%");
    });
  }

  next.on("click", () => {
    moveNext();
  });

  return sectionHome;

};


