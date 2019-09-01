import { Meteor } from "meteor/meteor";
import { HTTP } from "meteor/http";

Meteor.methods({
  githubList(userAgent) {
    try {
      const list = HTTP.call("GET", "http://api.github.com/search/repositories?q=meteor+example",
        { headers: { "User-Agent": userAgent } });

      //console.log(list);

      return list;
    } catch (error) {
      return new Meteor.Error('Não foi possivel retornar a lista de repositórios');
    }


  }
});