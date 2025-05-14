import { Schema, model } from 'mongoose';
import { reactionSchema } from "./reaction.js";
// Schema to create Post model
const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema],
}, {
    toJSON: {
        virtuals: true,
    },
    id: true,
});
// Create a virtual property `upvoteCount` that gets the amount of comments per user
thoughtSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
    return this.reactions;
});
// Initialize our Post model
const Thought = model('thought', thoughtSchema);
export default Thought;
