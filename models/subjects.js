module.exports = function(sequelize, DataTypes) {
  var Subjects = sequelize.define("Subjects", {
    subjectName: DataTypes.STRING,
    numOfSearches: DataTypes.INTEGER
  });
  return Subjects;
};
