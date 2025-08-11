const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth({ 
    clientId: "client-one" })  // Salva a sessao para nao precisar escanear o QR code toda vez que iniciar o bot
});

const client2 = new Client({
    authStrategy: new LocalAuth({
    clientId: "client-two" }) //pode criar varios clientes com IDs diferentes
});

const client3 = new Client({
    authStrategy: new LocalAuth({
    clientId: "client-three" }) //pode criar varios clientes com IDs diferentes
});


client.on('remote_session_saved', () => {
    // Do Stuff...
});
client2.on('remote_session_saved', () => {
    // Do Stuff...
});
client3.on('remote_session_saved', () => {
    // Do Stuff...
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


// client initialization...


client.on('message', async (msg) => {
    const chat = await msg.getChat();
    let user = await msg.getContact();
    await chat.sendMessage(`Hello @${user.id.user}`, {
        mentions: [user]
    });
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
