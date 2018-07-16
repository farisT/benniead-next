module.exports = (sequelize, DataTypes) => {
    var User =  sequelize.define('users', {
        name: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        message: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
    })
    return User;
}