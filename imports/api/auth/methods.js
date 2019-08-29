import { Meteor } from "meteor/meteor";
import { HTTP } from "meteor/http";

Meteor.methods({
  signin(email, password) {
    try {
      const session = HTTP.call("POST", "http://localhost:3333/session",
        {
          headers: { "content-type": "application/json" },
          data: {
            "email": email,
            "password": password
          },
        });
      console.log(session);
      return session;
    } catch (error) {
      return new Meteor.Error('Não foi possivel efetuar login');
    }


  }
});