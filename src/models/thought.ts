import { Schema, model, type Document } from 'mongoose';
import { reactionSchema } from "./reaction.js";

interface IThought extends Document {
  thoughtText: string,
  createdAt: Date,
  username: string,
  reactions: typeof reactionSchema[]
}

// Schema to create Post model
const thoughtSchema = new Schema<IThought>(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type:Date,
      default: Date.now,
    },
    username: {
      type:String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: true,
  }
);

// Create a virtual property `upvoteCount` that gets the amount of comments per user
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function (this: any) {
    return this.reactions;
  });

// Initialize our Post model
const Thought = model('thought', thoughtSchema);

export default Thought;
