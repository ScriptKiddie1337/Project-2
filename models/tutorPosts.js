module.exports = function(sequelize, DataTypes) {
  var TutorPosts = sequelize.define("TutorPosts", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    imageURL: DataTypes.STRING,
    description: {
      type: DataTypes.TEXT,
      validate: {
        len: [1, 500]
      }
    },
    hourlyRate: DataTypes.DOUBLE(5, 2),
    email: DataTypes.STRING
  });

  TutorPosts.associate = function(models) {
    TutorPosts.hasMany(models.Reviews, {
      onDelete: "cascade"
    });
  };
  return TutorPosts;
};
