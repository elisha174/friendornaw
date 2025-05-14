import { Schema, Types } from 'mongoose';
// Schema
const reactionSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxLength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
export { reactionSchema };
