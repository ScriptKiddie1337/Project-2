module.exports = function(sequelize, DataTypes) {
  var Subjects = sequelize.define("Subjects", {
    subjectName: DataTypes.STRING
  });
  return Subjects;
};
