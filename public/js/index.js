'use strict';

const render = (root,apiUsers) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  /*if (state.users == null) {
  } else {

  }*/
    wrapper.append(Home());
    wrapper.append(Header('phone'));
    wrapper.append(ValidNumber());


    //wrapper.append(ValidNumber(data));


  root.append(wrapper);
};

const state = {
  users: null,
  selectedUser: null
};

$( _ => {
  getUsers((err,apiUsers) => {
    if (err) console.log(err);

    console.log(apiUsers);
    const root = $("#root");
    render(root,apiUsers);
  });
});


