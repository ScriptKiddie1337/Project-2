module.exports = function(sequelize, DataTypes) {
    var Subjects = sequelize.define("subjects", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          subject_name: DataTypes.STRING
    });
    return Subjects;
}