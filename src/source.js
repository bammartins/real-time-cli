function RTCli () {
  "use strict";

  var 
    _app_key     = arguments[0].app_key || "",
    _auth_token  = arguments[0].auth_token || "",
    CLIENT 		   = null;

    return {
      init : function() {
        this.connect();
      },

      connect : function (client){
        loadOrtcFactory(IbtRealTimeSJType, function (factory, error) {
          if(!error && factory) {
            CLIENT = factory.createClient();
            CLIENT.setClusterUrl('http://ortc-developers.realtime.co/server/2.1/');
            CLIENT.setHeartbeatActive(true);
            CLIENT.setHeartbeatFails(1);
            CLIENT.setHeartbeatTime(10);
            CLIENT.connect(_app_key, _auth_token);

            if(client && typeof(client) === "function") {
              client(CLIENT);
            }

          } else {
            console.error("Factory error: " + error ? error.message : "is null.");
          }
        })
      }
    }
}
