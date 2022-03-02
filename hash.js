const { createHash } = require('crypto');

function hash(input) {
    return createHash('sha256').update(input).digest('base64');
}

let password = 'hello!';
const hash1 = hash(password);
console.log(hash1);
