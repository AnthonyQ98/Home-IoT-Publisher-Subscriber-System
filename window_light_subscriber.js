// REQUIREMENT D - messages that are related to the floor for both light and window
const mqtt = require("mqtt");

const mqttclient = mqtt.connect('mqtt://broker.hivemq.com:1883');

mqttclient.on('connect', () => {
    console.log('MQTT client connected to the broker');
    mqttclient.subscribe('secondFloorAnthonyQuinnTaba/+/+');
});

mqttclient.on('message', (topic, message) => {
    console.log(`Received the message from ${topic}: ${message.toString()}`);
});

