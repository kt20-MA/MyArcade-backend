import bcrypt from 'bcryptjs';
import uuid from 'uuid/v4';
import db from 'database/models';

module.exports = {
  createUser: async args => {
    const { User } = db;
    try {
      const foundUser = await User.findOne({
        where: { email: args.userInput.email }
      });

      if (foundUser) {
        throw new Error(
          'User exists already, please login or verify your email account'
        );
      }

      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);
      const {
        firstName,
        lastName,
        photo = 'upload image',
        bio = 'Enter your bio',
        email
      } = args.userInput;
      const user = new User({
        firstName,
        lastName,
        photo,
        bio,
        email,
        userId: uuid(),
        password: hashedPassword
      });
      const registeredUser = await user.save();

      return {
        ...registeredUser.get({
          plain: true
        }),
        password: 'null'
      };
    } catch (err) {
      throw err;
    }
  }
};
