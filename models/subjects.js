module.exports = function(sequelize, DataTypes) {
  var Subjects = sequelize.define("Subjects", {
    subjectName: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    numOfSearches: {
      type: DataTypes.INTEGER,
      validate: {
        isInt: true
      }
    }
  });
  return Subjects;
};
