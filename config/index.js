require('dotenv').config();

module.exports = {
    MONGODB_CLOUD: process.env.MONGODB_CLOUD,
    MONGODB_LOCAL : process.env.MONGODB_LOCAL,
    PORT : process.env.PORT,
    NODE_ENV: process.env.NODE_ENV, 
}