const amqp = require('amqplib');

function connect() {
    return amqp
        .connect('amqps://hmxytygi:Xtc2t3n7iQGUrc4bV_F98p2ZcmFTbJD_@jackal.rmq.cloudamqp.com/hmxytygi')
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