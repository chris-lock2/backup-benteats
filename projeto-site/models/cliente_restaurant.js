'use strict';
//Campo da tb_client_restaurant
module.exports = (sequelize, DataTypes) => {
    let ClientRestaurant = sequelize.define('ClientRestaurant',{	
		idClient: {
			field: 'id_client',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
        nameClient: {
            field: 'name_client',
            type: DataTypes.STRING,
            allowNull: true
        },
        UF: {
            field: 'UF',
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            field: 'city',
            type: DataTypes.STRING,
            allowNull: true
        },
        addressClient: {
            field: 'address_client',
            type: DataTypes.STRING,
            allowNull: true
        },
        nameRestaurant: {
            field: 'name_restaurant',
            type: DataTypes.STRING,
            allowNull: true
        }
	}, 
	{
		tableName: 'tb_client_restaurant', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return ClientRestaurant;
};