// REQUIREMENT B - strictly messages related to a floor/room/temperature 

const mqtt = require("mqtt");

const mqttclient = mqtt.connect('mqtt://broker.hivemq.com:1883');

mqttclient.on('connect', () => {
    console.log('MQTT client connected to the broker');
    // Subscribe to topics related to temperature for any floor and room
    mqttclient.subscribe('firstFloorAnthonyQuinnTaba/office/temperature');
});

mqttclient.on('message', (topic, message) => {
    console.log(`Received the message from ${topic}: ${message.toString()}`);
    // Handle messages related to floor, room, and temperature
});