var mahrioAPI = (function(){
  'use strict';
  var mahrioAPIInstance;

  function init(){

    return {
      networks: {},
      users: {},
      articles: {},
      sections: {},
      conversations: {},
      messages: {},
      notifications: {}
    }
  }

  return {
    getInstance: function(){
      if( !mahrioAPIInstance ){
        mahrioAPIInstance = init();
      }

      return mahrioAPIInstance;
    }
  }
})();
