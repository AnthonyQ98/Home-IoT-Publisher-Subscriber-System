const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

const topics = ['tabaAnthonyQuinn/window/office', 'tabaAnthonyQuinn/light/desk'];
const interval = 5000; // publish every 5 seconds

client.on("connect", () => {
  console.log("Publisher Connected to MQTT broker");

  setInterval(() => {
    const randomTopicIndex = Math.floor(Math.random() * topics.length);
    const topic = topics[randomTopicIndex];
    let message;

    switch (topic) {
      case 'tabaAnthonyQuinn/window/office':
        const windowStatus = ["OPENED", "CLOSED", "UNKNOWN"];
        message = JSON.stringify({
          window: windowStatus[Math.floor(Math.random() * windowStatus.length)],
        });
        break;
      case 'tabaAnthonyQuinn/light/desk':
        const lightSettings = ["MANUAL - ON", "MANUAL - OFF", "TIMER - ON", "TIMER - OFF", "UNKNOWN"];
        message = JSON.stringify({
          lighting: lightSettings[Math.floor(Math.random() * lightSettings.length)],
        });
        break;
    }
    client.publish(topic, message);
    console.log(`Message set to ${topic}: ${message}`);
  }, interval);
});
