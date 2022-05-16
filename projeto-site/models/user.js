'use strict';
//Campos da tb_user
module.exports = (sequelize, DataTypes) => {
    let User = sequelize.define('User',{	
		idUser: {
			field: 'id_user',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
        name: {
            field: 'name',
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
        }
	}, 
	{
		tableName: 'tb_user', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return User;
};