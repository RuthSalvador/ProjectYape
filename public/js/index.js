'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if (state.pages == null) {
    wrapper.append(Home(_ => {
      render(root);
    }));

  } else if(state.pages == 1) {
    wrapper.append(ValidNumber(_ => {
      render(root);
    }));

  } else if (state.pages == 2) {
    wrapper.append(InsertCode(_ => {
      render(root);
    }));

  } else if (state.pages == 3) {
    wrapper.append(CreateUser(_ => {
      render(root);
    }));

  } else if (state.pages == 4) {
    wrapper.append(SuccessRegis(_ => {
      render(root);
    }));

  } else if (state.pages == 5) {
    wrapper.append(RegisterCard(_ => {
      render(root);
    }));

  } else if (state.pages == 6) {
    wrapper.append(KeyCard(_ => {
      render(root);
    }));

  } else if (state.pages == 7) {
    wrapper.append(Profile(_ => {
      render(root);
    }));
  }

  root.append(wrapper);
};

const state = {
  users: null,
  pages: null
};

$( _ => {
  getUsers((err,apiUsers) => {
    if (err) console.log(err);

    console.log(apiUsers);
    const root = $("#root");
    render(root);
  });
});
/*

$(_ => {
  $.get('http://localhost:3000/api',(err, data) => {
    if (err) console.log(err);
 state.users = data;
    console.log(data);
    const root = $("#root");
    render(root);
  });

});*/
