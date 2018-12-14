import { Schema } from 'mongoose';

export const appSchema: Schema = new Schema({
    pin: {
        type: Number,
        required: true
    },
    keyword: {
        type: String,
        required: true
    },
    direction: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
});