const { createCipheriv, randomBytes, createCipheriv, createDecipheriv } = require('crypto');

// message
const message = 'hello';
// shared key
const key = randomBytes(32);
// initialization vector - randomizes output when encrypted
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

const encryptedMessage = cipher.update(message, 'utf8', 'hex')+cipher.final('hex');

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8')+decipher.final('utf8');