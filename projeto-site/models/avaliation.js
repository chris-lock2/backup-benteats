'use strict';
//Campo da tb_avaliation
module.exports = (sequelize, DataTypes) => {
    let Avaliation = sequelize.define('Avaliation',{	
		idFavorite: {
			field: 'id_avaliation',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
        nameRestaurant: {
            field: 'rate_restaurant',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        nameFavorite: {
            field: 'rate_food',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        idUser: {
            field: 'name_user',
            type: DataTypes.STRING,
            allowNull: true
        },
        idFood: {
            field: 'dt_avaliation',
            type: DataTypes.DATE,
            allowNull: true
        },
        idAvaliation: {
            field: 'id_food',
            type: DataTypes.INTEGER,
            allowNull: true
        },
        idAvaliation: {
            field: 'id_restaurant',
            type: DataTypes.INTEGER,
            allowNull: true
        }
	}, 
	{
		tableName: 'tb_avaliation', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Avaliation;
};