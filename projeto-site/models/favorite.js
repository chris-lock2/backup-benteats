'use strict';
//Campo da tb_favorite
module.exports = (sequelize, DataTypes) => {
    let Favorite = sequelize.define('Favorite',{	
		idFavorite: {
			field: 'id_favorite',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
        nameRestaurant: {
            field: 'name_restaurant',
            type: DataTypes.STRING,
            allowNull: true
        },
        nameFavorite: {
            field: 'name_favorite',
            type: DataTypes.STRING,
            allowNull: true
        },
        idUser: {
            field: 'id_user',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        idFood: {
            field: 'id_food',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        idAvaliation: {
            field: 'id_avaliation',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        idRestaurant: {
            field: 'id_restaurant',
            type: DataTypes.INTEGER,
            allowNull: true
        }
	}, 
	{
		tableName: 'tb_favorite', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Favorite;
};