import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import './navbar.html';

Template.navbar.onCreated(function () {
});

Template.navbar.helpers({
});

Template.navbar.events({
  'click .logout'(event) {
    event.preventDefault();

    Session.set('token');
    Session.set('id');
    Session.set('nome');
    Session.set('email');

    FlowRouter.go('/');

  },
});
