import CA from "../assets/ssl/m2mqtt_srv.crt";
import CERT from "../assets/ssl/m2mqtt_ca.crt";
import KEY from "../assets/ssl/m2mqtt_ca.key";

import * as mqtt from "mqtt";
let client = mqtt.connect("mqtts://192.46.209.78:1887", {
  port: 1887,
  host: "192.46.209.78",
  keyPath: KEY,
  certPath: CERT,
  rejectUnauthorized: false,

  //The CA list will be used to determine if server is authorized
  ca: CA,
}); // create a client

client.on("connect", function () {
  client.subscribe("presence", function (err) {
    if (!err) {
      //   client.publish("presence", "Hello mqtt");
      client.subscribe("test");
    } else {
      console.log(err);
    }
  });
});

client.on("message", function (topic, message) {
  // message is Buffer
  console.log("Topic  : " + topic + "     " + message.toString());
  //   console.log(message.toString());
});

export default client;
