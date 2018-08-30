module.exports = function(sequelize, DataTypes) {
  var TutorPosts = sequelize.define("TutorPosts", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 150],
        notEmpty: true
      }
    },
    firstName: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30],
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30],
        notEmpty: true
      }
    },
    venmoName: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30],
        notEmpty: true
      }
    },
    subject: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 30],
        notEmpty: true
      }
    },
    imageURL: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT,
      validate: {
        len: [1, 500],
        notEmpty: true
      }
    },
    hourlyRate: {
      type: DataTypes.DOUBLE(5, 2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        len: [1, 100],
        notEmpty: true
      }
    }
  });

  TutorPosts.associate = function(models) {
    TutorPosts.hasMany(models.Reviews, {
      onDelete: "cascade"
    });
  };
  return TutorPosts;
};
