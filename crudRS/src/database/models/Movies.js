const { ForeignKeyConstraintError } = require("sequelize");
const { underscoredIf } = require("sequelize/lib/utils");

module.exports = (sequelize,DataTypes) => {
    const alias = "Movie";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        title:{
            type:DataTypes.STRING(500),
            allowNull: false,
        },
        rating:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        awards:{
            type:DataTypes.INTEGER,
            allowNull: false,
            unique:true
        },       
        length:{
            type:DataTypes.INTEGER,
            allowNull: true,
            unique:true
        },       
        genre_id:{
            type:DataTypes.INTEGER,
            usigned:true,
        },       
    };
    const config = {
        tablename:"movies",
        timestamp: true,
        underscored:true
    };
    const Movie = sequelize.define(alias,cols,config);
    Movie.associate = function (models) {
        Movie.belongsTo(models.Genre, {
            as: "genre",
            foreignKey: 'genre_id'
        })
        Movie.belongsToMany(models.Actor, {
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "actor_id",
            as: "actors",
            timestamps: false,
        });
    }
    return Movie;
}