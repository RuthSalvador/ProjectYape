'use strict';

const render = (root,data) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Home());
  /*wrapper.append(Cartelera(data));*/
  root.append(wrapper);
};

$( _ => {
  getUsers((err,data) => {
    if (err) console.log(err);

    console.log(data);
    const root = $("#root");
    render(root,data);
  });
});


