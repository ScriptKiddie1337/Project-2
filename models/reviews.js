module.exports = function(sequelize, DataTypes) {
  var Reviews = sequelize.define("Reviews", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    author: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    text: {
      type: DataTypes.TEXT,
      validate: {
        len: [1, 500]
      }
    }
  });

  Reviews.associate = function(models) {
    Reviews.belongsTo(models.TutorPosts, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Reviews;
};
