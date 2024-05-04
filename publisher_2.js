const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");

const topics = ['secondFloorAnthonyQuinnTaba/window/office', 'secondFloorAnthonyQuinnTaba/light/desk'];
const interval = 500; // publish every 0.5 seconds

client.on("connect", () => {
  console.log("Publisher Connected to MQTT broker");

  setInterval(() => {
    const randomTopicIndex = Math.floor(Math.random() * topics.length);
    const topic = topics[randomTopicIndex];
    let message;

    switch (topic) {
      case 'secondFloorAnthonyQuinnTaba/window/office':
        const windowStatus = ["OPENED", "CLOSED", "UNKNOWN"];
        message = JSON.stringify({
          window: windowStatus[Math.floor(Math.random() * windowStatus.length)],
        });
        break;
      case 'secondFloorAnthonyQuinnTaba/light/desk':
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
