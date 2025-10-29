const mongoose = require('mongoose');
const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    disease:{
        type:String,
        required:true,
        unique:true
    },
    WardNumber:{
        type:String,
        required:true
    },
    admitedData:{
        type:Date,
        required:true,
        default:Date.now
    },
    registerBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Doctor',
        required:true
    }
});
const Doctor = mongoose.model('Patient',patientSchema)
module.exports = Doctor;