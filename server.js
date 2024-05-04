const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mqtt = require("mqtt");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const mqttclient = mqtt.connect('mqtt://broker.hivemq.com:1883');

const topic = ['firstFloorAnthonyQuinnTaba/office/temperature', 'firstFloorAnthonyQuinnTaba/office/humidity', 'secondFloorAnthonyQuinnTaba/window/office', 'secondFloorAnthonyQuinnTaba/light/desk'];

app.use(express.static('public'));

mqttclient.on('connect', () => {
    console.log('MQTT client connected to the broker');
    mqttclient.subscribe(topic);
});

client.on('close', () => {
    console.log('MQTT connection closed');
});

mqttclient.on('message', (topic, message) => {
    console.log(`Received the message from ${topic}: ${message.toString()}`);
    switch (topic) {
        case "firstFloorAnthonyQuinnTaba/office/temperature":
            handleTemperature(message.toString());
            io.emit('firstFloorAnthonyQuinnTaba/office/temperature', message.toString());
            break;
        case "firstFloorAnthonyQuinnTaba/office/humidity":
            handleHumidity(message.toString());
            io.emit('firstFloorAnthonyQuinnTaba/office/humidity', message.toString());
            break;
        case "secondFloorAnthonyQuinnTaba/window/office":
            handleWindow(message.toString());
            io.emit('secondFloorAnthonyQuinnTaba/window/office', message.toString());
            break;
        case "secondFloorAnthonyQuinnTaba/light/desk":
            handleLighting(message.toString());
            io.emit('secondFloorAnthonyQuinnTaba/light/desk', message.toString());
            break;
        default:
            console.log("Unknown topic");
    }
});

function handleTemperature(data) {
    console.log(`Handling temperature data: ${data}`)
}

function handleHumidity(data) {
    console.log(`Handling humidity data: ${data}`)
}

function handleWindow(data) {
    console.log(`Handling window data: ${data}`)
}

function handleLighting(data) {
    console.log(`Handling lighting data: ${data}`)
}

io.on('connection', (socket) => {
    console.log(`A user is connected`);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})