import {model, Schema} from 'mongoose'

const bossSchema = Schema(
    {
        name : {
            type: String,
            required : [true, "Please Enter An Boss's Name."]
        },
        spriteUrl : {
            type: String,
            required : [true, "Please Enter a url."]
        },
        health : {
            type: Number,
            required: [true, "Please enter boss's health"]
        },
        chapter : {
            type: Number,
            required: [true, 'Please enter a chapter number (will be 1-3)']
        },
        floors: {
            type: String,
            required: [true, 'please list all floors boss appears on']
        },
        behavior: {
            type: String,
            required: [true, 'enter boss moves here'] 
        }
    },
    {timestamps: true}
);

const Boss = model('Boss', bossSchema);
export default Boss;