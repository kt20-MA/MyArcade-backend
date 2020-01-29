'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      userId: { type: DataTypes.STRING, unique: true },
      firstName: { type: DataTypes.STRING },
      lastName: { type: DataTypes.STRING },
      photo: { type: DataTypes.STRING },
      bio: { type: DataTypes.STRING },
      verified: { type: DataTypes.BOOLEAN, defaultValue: false },
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
