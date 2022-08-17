const { connect }= require('mongoose');
const { success, error, info} = require('consola')
const{MONGODB_CLOUD,MONGODB_LOCAL, NODE_ENV} = require('/index');

let connectDB =  async() =>{
    try {
        if (NODE_ENV === "development"){
            await connect(MONGODB_LOCAL);
            success ("Local database connected")

        }else {
            await connect(MONGODB_CLOUD);
            success("Atlas database connected")
        }
    }
    catch(err){error(err)}
}
 
module.exports = connectDB;