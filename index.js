const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', (message) => {
  console.log(message.body, message.from, message.to);
  if (message.body === '!eduardo') {
    message.reply('hola bro');
  }
});

client.on('message_create', async (msg) => {
  console.log(msg);
});

client.initialize();
