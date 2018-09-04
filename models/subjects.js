module.exports = function(sequelize, DataTypes) {
  var Subjects = sequelize.define("Subjects", {
    subjectName: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    numOfSearches: DataTypes.INTEGER
  });
  return Subjects;
};
