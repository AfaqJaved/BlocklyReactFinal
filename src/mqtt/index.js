import * as mqtt from "mqtt";
let client = mqtt.connect("mqtts://192.46.209.78:1887/ws", {
  rejectUnauthorized: false,
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
