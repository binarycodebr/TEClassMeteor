import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/signin/signin.js';
import '../../ui/pages/not-found/not-found.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.signin',
  action() {
    const session = Session.get('token');

    if (!session) {
      BlazeLayout.render('App_body', { main: 'App_signin' });
    } else {
      FlowRouter.go('/home');
    }
  },
});

FlowRouter.route('/home', {
  name: 'App.home',
  action() {
    const session = Session.get('token');

    if (session) {
      BlazeLayout.render('App_body', { main: 'App_home' });
    } else {
      FlowRouter.go('/');
    }

  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
