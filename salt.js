const { scryptSync, randomBytes, timingSafeEqual } = require('crypto')

function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = { email, password: `${salt}:${hashedPassword}`};
    
    user.push(user);
    return user;
}

function login(email, password){
    const user = users.find
    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);
    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);
}

