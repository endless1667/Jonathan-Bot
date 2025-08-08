const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
});


client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

// Listening to all incoming messages
client.on('message_create', message => {
	console.log(message.body);
});

client.on('message_create', message => {
    if(message.body === 'oi') {
        message.reply('Ola, voce esta conectado ao bot de Endlesss!');
        message.reply('sou um projeto pessoal de bot do endless para whatsapp');
        message.react<('👋');
        message.reply('me chamo jonathan');
    }
}
) 
client.on('message_create', message => {
    if(message.body === 'tchau') {
        message.reply('Tchau, ate mais!');
        message.react<('👋');
    }
}
)

client.initialize();
