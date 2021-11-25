import * as mqtt from "mqtt";

let client = mqtt.connect("mqtts://mqtt.afaqjaved.com", {
  port: 1885,
  username: "afaq",
  password: "test",
}); // create a client

client.on("connect", function () {
  client.subscribe("presence", function (err) {
    if (!err) {
      //   client.publish("presence", "Hello mqtt");
      client.subscribe("test");
      client.publish("test", "working");
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
