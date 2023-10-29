import mongoose from "mongoose";

const EscrowSchema=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    description: { 
        type: String,
        required:true
    },
    amount: {
        type: Number,
        required: true
    },
    tokenId: {
        type: String,
        required: true
    },
    client:{
        type: String,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Escrow=mongoose.models.Escrow||mongoose.model('Escrow',EscrowSchema);

export default Escrow;