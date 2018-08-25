module.exports = function(sequelize, DataTypes) {
  var Reviews = sequelize.define("reviews", {
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
    },
    date: DataTypes.DATE
  });
  return Reviews;
};
