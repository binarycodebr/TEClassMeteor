import { Meteor } from 'meteor/meteor';

import './home.html';

import '../../components/navbar/navbar.js';

import '../../components/info/info.js';

Template.App_home.onCreated(function () {
  Meteor.call('githubList', window.navigator.userAgen, (error, response) => {
    if (!error) {
      const lista = response;
      let list = [];
      lista.data.items.map(item => {
        list.push(item);
      });
      Session.set('githubList', list);
    }
  });
});


Template.App_home.helpers({
  listGitHub() {
    let lista = Session.get('githubList');

    if (lista) {
      return lista;
    }
  },
});