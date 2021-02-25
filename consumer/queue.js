const amqp = require('amqplib');

function connect() {
    return amqp
        .connect('URL_STRING_RABBIT')//Adicione aqui sua string de conexõ ao servidor Rabbit
        .then(conn => conn.createChannel());
}

function createQueue(channel, queue) {
    return new Promise((resolve, reject) => {
        try {
            channel.assertQueue(queue, { durable:true });
            channel.prefetch(1);
            resolve(channel);
        } catch (error) {
            reject(error);
        }
    });
}

function consume(queue, callback) {
    connect()
        .then(channel => createQueue(channel, queue))
        .then(channel => channel.consume(queue, callback, { noAck:true }))
        .catch(err => console.log(err));
}

module.exports = {
    consume
};