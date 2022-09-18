const mongoose = require('mongoose');
const msgSchema = new mongoose.Schema({
    msg: {
        type: String,
        //required: true
    },
    
},{ typeKey: '$type' })

const Msg = mongoose.model('msg', msgSchema);
module.exports = Msg;