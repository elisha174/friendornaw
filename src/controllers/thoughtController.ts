import { Thought, User } from '../models/index.js';
import { Request, Response } from 'express';

// get all thoughts
  export const getThoughts = async (_req: Request, res: Response) => {
    try {
      const thoughts = await Thought.find();
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  export const getSingleThoughts = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId });

      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      } else {
        res.json(thought);
      }
    } catch (err) {
      res.status(500).json(err)
    }
  }

  // create a new thought
  export const createThoughts = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { new: true }
      );

      if (!user) {
         res
          .status(404)
          .json({ message: 'Thought created, but found no user with that ID' });
      } else {  
        res.json('Created the thought 🎉');
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }

    // delete thought
    export const removeThoughts = async (req: Request, res: Response) => {
      try {
       const thought = await Thought.findOneAndUpdate(
           { _id: req.params.thoughtId },
           { $pull: { reactions: { thoughtId: req.params.reactionID } } },
           { runValidators: true, new: true }
       ); 

        if (!thought) {
           return res
               .status(404)
               .json({ message: 'No student found with that ID :(' });
       }

        return res.json(thought);
   } catch (err) {
       return res.status(500).json(err);
   }
  }

    // create a new reaction
    export const createReaction = async (req: Request, res: Response) => {
      try {

        const thought = await Thought.findOneAndUpdate(
          { _id: req.body.thoughtId },
          { $addToSet: { reactions: req.body } },
          { new: true }
        );
  
        if (!thought) {
           res
            .status(404)
            .json({ message: 'Thought created, but found no user with that ID' });
        } else {  
          res.json('Created the thought 🎉');
        }
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    }


        // delete reaction
  export const deleteReaction = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.body.thoughtId },
        { $pull: { reactions: { thoughtId: req.params.assignmentId } } },
        { new: true }
      );

      if (!thought) {
         res
          .status(404)
          .json({ message: 'Thought created, but found no reaction with that ID' });
      } else {  
        res.json('Created the thought 🎉');
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
