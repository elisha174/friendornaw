import { Schema, model } from 'mongoose';
// Schema to create User model
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'thought',
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
}, {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
        virtuals: true,
    },
    id: true,
});
// Create a virtual property `friendsCount` that gets and sets the user's number of friends
userSchema
    .virtual('friendCount')
    // Getter
    .get(function () {
    return this.friends;
});
// // Setter to set the friends Count
// .set(function (this: any, v: string) {
//   const friendCount = v.length;
//   this.set({ friendCount });
//   console.log(friendCount);
// });
// Initialize our User model
const User = model('user', userSchema);
export default User;
