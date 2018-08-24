module.exports = function (sequelize, DataTypes) {
    var TutorPost = sequelize.define("tutorPosts", {
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
            },
        },
        hourly_pricing: DataTypes.DOUBLE(5, 2),
        email: DataTypes.STRING
    });
    return TutorPost;
};