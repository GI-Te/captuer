const mongoose = require("mongoose");
const { captuer } = require("../controller/captuerController");

const captuerSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    phone:{
        type: String,
        require: true,
    },
    location:{
        type: String,
        require:true
    },
    DoB:{
        type: String,
        require:true
    },
    age:{
        type:String,
        require:true
    }
},{
    timestamps:true
},
);

const Captuer =mongoose.model("Captuer", captuerSchema);
module.exports = Captuer;