import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './signin.html';
import '../../teclass/assets/css/styles.css';


Template.App_signin.onCreated(function () {
  let data = new Date();
  console.log('Criando..' + data);
});

Template.App_signin.onRendered(function () {
  let data = new Date();
  console.log('Renderizando...' + data);
});

Template.App_signin.helpers({
  isLoged() {
    return false;
  },
});

Template.App_signin.events({
  'click #btn-auth'(event) {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email && password) {
      Meteor.call('signin', email, password, (error, response) => {

        if (!error) {
          const session = response.data;
          console.log(session);
          Session.setPersistent('token', session.token);
          Session.setPersistent('id', session.user._id);
          Session.setPersistent('nome', session.user.name);
          Session.setPersistent('email', session.user.email);

          FlowRouter.go('/home');
        }

      });
    }




  },
});
