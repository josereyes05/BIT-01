const jwt = require('jsonwebtoken');

function getTokens(payload){
    return new Promise((resolve, reject)=>{
        jwt.sign(payload, process.env.jwtkey, {expiresIn: '1d'}, (error, token)=>{
            if (error) {
                reject({error})
            } else {
                resolve({token})
            }
        })
    });
}

module.exports = getTokens