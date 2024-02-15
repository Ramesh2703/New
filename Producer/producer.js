const kafka = require('kafka-node');

const Producer = kafka.Producer;
const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
const producer = new Producer(client);

producer.on('ready', () => {
  const topic = 'firsttime';

  // Sample message
  const message = {
    user: 'Ram',
    text: 'Boommmm!',
    timestamp: new Date().toISOString(),
  };

  const payload = [
    {
      topic: topic,
      messages: JSON.stringify(message),
    },
  ];

  producer.send(payload, (err, data) => {
    if (err) {
      console.error('Error producing message:', err);
    } else {
      console.log('Message sent:', data);
    }
  });
});

producer.on('error', (err) => {
  console.error('Producer error:', err);
});
