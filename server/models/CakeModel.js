const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose); // Auto-Increment

const CakeSchema = new mongoose.Schema({
    rating: {
    type: Number,
    trim: true,
    required: [true, 'Baker rate is required'],
    unique: false,
    default: 5
    },
    comment: {
    type: String,
    required: [true, 'Baker rate is required'],
    minlength: [3, 'Comment length must be greater than 3'],
    trim: true,
    default: ""
    },
    created_at : {
        type : Date,
    },
});

CakeSchema.plugin(AutoIncrement, {inc_field: 'cake_id'});
const Cake = mongoose.model("cakes", CakeSchema);

const CakeModel = {
    addRate : function( newRate ){
        return Cake.create( newRate );
    },
    getAllRates : function(){
        return Cake.find();
    },
    getCakeByName : function( title ){
        return Cake.findOne({ title });
    },
    delete : function( title ){
        return Cake.deleteOne({ title });
    }
};

module.exports = {CakeModel, CakeSchema};