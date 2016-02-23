// Generated by CoffeeScript 1.10.0
(function() {
  var api;

  api = require('./_api');

  module.exports = function(key, token) {
    var client;
    client = {};
    Object.keys(api).forEach(function(apiName) {
      return client[apiName] = function(params) {
        params || (params = {});
        params.key = key;
        params.token = token;
        return api[apiName](params);
      };
    });
    return client;
  };

}).call(this);