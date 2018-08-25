module.exports = function(sequelize, DataTypes) {
  var Subjects = sequelize.define("subjects", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    subjectName: DataTypes.STRING
  });
  return Subjects;
};
