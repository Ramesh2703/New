const kafka = require('kafka-node');

const Consumer = kafka.Consumer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const consumer = new Consumer(client, [{ topic: 'firsttime' }], { autoCommit: false });

consumer.on('message', (message) => {
  const data = JSON.parse(message.value);
  console.log(`Received message from ${data.user}: ${data.text}`);
});

consumer.on('error', (err) => {
  console.error('Consumer error:', err);
});
