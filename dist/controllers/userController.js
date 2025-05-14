import User from '../models/User.js';
export const getUsers = async (_req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
export const getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        // .select('-__v')
        // .populate('thoughts', 'friends');
        if (!user) {
            res.status(404).json({ message: 'No user with that ID' });
        }
        else {
            res.json(user);
        }
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// create a new user
export const createUser = async (req, res) => {
    try {
        const dbUserData = await User.create(req.body);
        res.json(dbUserData);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// update user
export const updateUser = async (req, res) => {
    // TODO: Write a route that finds the first document that matches the specified route parameter
    // and updates it using the name provided in the request body.
    // Return the updated document
    try {
        const result = await User.findOneAndUpdate({ name: req.params.id }, // find property
        { name: req.body.id }, // update property
        { new: true });
        res.status(200).json(result);
        console.log(`Deleted: ${result}`);
    }
    catch (err) {
        console.log('Uh Oh, something went wrong on the update');
        res.status(500).json({ message: 'something went wrong on the update' });
    }
};
// delete user (still need to edit)
export const deleteUser = async (req, res) => {
    // TODO: Write a route that finds the first document that matches the specified route parameter
    // and updates it using the name provided in the request body.
    // Return the updated document
    try {
        const result = await User.findOneAndDelete({ name: req.params.id }, // find property
        { $pull: { name: req.params.id } } // update property
        //{ new: true } //this is used this will give you the object after you update it
        );
        res.status(200).json(result);
        console.log(`Deleted: ${result}`);
    }
    catch (err) {
        console.log('Uh Oh, something went wrong on the update');
        res.status(500).json({ message: 'something went wrong on the update' });
    }
};
// create a new friend
export const addFriend = async (req, res) => {
    try {
        const dbUserData = await User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true });
        res.json(dbUserData);
    }
    catch (err) {
        res.status(500).json(err);
    }
};
// delete a friend
export const removeFriend = async (req, res) => {
    try {
        const dbUserData = await User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true });
        if (!dbUserData) {
            return res
                .status(404)
                .json({ message: 'No user with that ID :(' });
        }
        return res.json(dbUserData);
    }
    catch (err) {
        return res.status(500).json(err);
    }
};
