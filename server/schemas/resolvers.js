const { AuthenticationError } = require('apollo-server-express');
const { Content, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  // Query: {
  //   users: async () => {
  //     return User.find().populate('thoughts');
  //   },
  //   user: async (parent, { username }) => {
  //     return User.findOne({ username }).populate('thoughts');
  //   },
  //   thoughts: async (parent, { username }) => {
  //     const params = username ? { username } : {};
  //     return Content.find(params).sort({ createdAt: -1 });
  //   },
  //   thought: async (parent, { thoughtId }) => {
  //     return Content.findOne({ _id: thoughtId });
  //   },
  // },
    Query: {
      async content(parent, args) {
        try {
          const allContent = await Content.findOne({url: args.url});
          return allContent;
        } catch (error) {
          throw new Error(`Failed to retrieve content: ${error.message}`);
        }
      },

      async allContent() {
        try {
          const allContent = await Content.find();
          return allContent;
        } catch (error) {
          throw new Error(`Failed to retrieve content: ${error.message}`);
        }
      },
    },
  


    Mutation: {
      addContent: async (parent, args) => {
        const { url, title, rating, genre, review } = args;
        try {
          const newContent = new Content({ url, title, rating, genre, review });
          await newContent.save();
          return newContent;
        } catch (error) {
          throw new Error(`Failed to add new content: ${error.message}`);
        }},
        addUser: async (parent, { username, email, password }) => {
                // First we create the user
                const user = await User.create({ username, email, password });
                // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
                const token = signToken(user);
                // Return an `Auth` object that consists of the signed token and user's information
                return { token, user };
              },
              login: async (parent, { email, password }) => {
                // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
                const user = await User.findOne({ email });
          
                // If there is no user with that email address, return an Authentication error stating so
                if (!user) {
                  throw new AuthenticationError('No user found with this email address');
                }
          
                // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
                const correctPw = await user.isCorrectPassword(password);
          
                // If the password is incorrect, return an Authentication error stating so
                if (!correctPw) {
                  throw new AuthenticationError('Incorrect credentials');
                }
          
                // If email and password are correct, sign user into the application with a JWT
                const token = signToken(user);
          
                // Return an `Auth` object that consists of the signed token and user's information
                return { token, user };
              },
      }};
    
  // Mutation: {
  //   addContent: async (title, rating, genre, review) => {
  //     try {
  //       const newContent = new Content({ title, rating, genre, review });
  //       await newContent.save();
  //       return newContent;
  //     } catch (error) {
  //       throw new Error(`Failed to add new content: ${error.message}`);
  //     }
  //   }}};
  //   addContent: async (title, rating, genre, review) => {
  //     title
  //     rating
  //     genre
  //     review
  //   }};
//     addUser: async (parent, { username, email, password }) => {
//       // First we create the user
//       const user = await User.create({ username, email, password });
//       // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
//       const token = signToken(user);
//       // Return an `Auth` object that consists of the signed token and user's information
//       return { token, user };
//     },
//     login: async (parent, { email, password }) => {
//       // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
//       const user = await User.findOne({ email });

//       // If there is no user with that email address, return an Authentication error stating so
//       if (!user) {
//         throw new AuthenticationError('No user found with this email address');
//       }

//       // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
//       const correctPw = await user.isCorrectPassword(password);

//       // If the password is incorrect, return an Authentication error stating so
//       if (!correctPw) {
//         throw new AuthenticationError('Incorrect credentials');
//       }

//       // If email and password are correct, sign user into the application with a JWT
//       const token = signToken(user);

//       // Return an `Auth` object that consists of the signed token and user's information
//       return { token, user };
//     },

//     addReview: async (parent, { thoughtId, commentText, commentAuthor }) => {
//       return Content.findOneAndUpdate(
//         { _id: thoughtId },
//         {
//           $addToSet: { comments: { commentText, commentAuthor } },
//         },
//         {
//           new: true,
//           runValidators: true,
//         }
//       );
//     },
//     removeThought: async (parent, { thoughtId }) => {
//       return Content.findOneAndDelete({ _id: thoughtId });
//     },
//     removeComment: async (parent, { thoughtId, commentId }) => {
//       return Content.findOneAndUpdate(
//         { _id: thoughtId },
//         { $pull: { comments: { _id: commentId } } },
//         { new: true }
//       );
//     },
//   },
// };

module.exports = resolvers;
