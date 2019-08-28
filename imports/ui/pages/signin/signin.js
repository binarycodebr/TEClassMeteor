import { Meteor } from 'meteor/meteor';
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
    let elemento = document.getElementById('email').value;
    console.log(elemento.toLowerCase());
    document.getElementById('email').value = elemento.toLowerCase();
  },
});
