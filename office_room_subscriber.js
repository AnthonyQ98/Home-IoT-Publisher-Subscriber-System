// REQUIREMENT C -  any messages that are related to room (including its subtopics)

const mqtt = require("mqtt");

const mqttclient = mqtt.connect('mqtt://broker.hivemq.com:1883');

mqttclient.on('connect', () => {
    console.log('MQTT client connected to the broker');
    // Subscribe to topics for the office room
    mqttclient.subscribe('firstFloorAnthonyQuinnTaba/office/+');
});

mqttclient.on('message', (topic, message) => {
    console.log(`Received the message from ${topic}: ${message.toString()}`);
});

