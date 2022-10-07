const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");

class User extends Model {
    checkPassword(password) {
        return bcrypt.compareSync(password, this.password)
    }
}
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false     
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (newUserdata) => {
                newUserdata.password = await bcrypt.hash(newUserdata.password, 10);
                return newUserdata;
            }
        },
        sequelize,       
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "user"
    }
)
module.exports = User