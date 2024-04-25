const { ForeignKeyConstraintError } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const alias = "Genre";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true
        },
        name:{
            type:DataTypes.STRING(100),
            allowNull: false,
        },
        ranking:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        active:{
            type:DataTypes.INTEGER,
            allowNull: true,
            unique:true
        },       
    };
    const config = {
        tablename:"genres",
        timestamp: true,
        underscored:true
    };
    const Genres = sequelize.define(alias,cols,config);
    Genres.associate=function(models){
        Genres.hasMany(models.Movie)
            as="movie",
            ForeignKey="genre_id"
    }
    return Genres;
}