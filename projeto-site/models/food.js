'use strict';
//Campo da tb_food
module.exports = (sequelize, DataTypes) => {
    let Food = sequelize.define('Food',{	
		idFood: {
			field: 'id_food',
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},	
        nameFood: {
            field: 'name_food',
            type: DataTypes.STRING,
            allowNull: true
        },
        priceFood: {
            field: 'price_food',
            type: DataTypes.DECIMAL,
            allowNull: true
        },
        dtInsert: {
            field: 'dt_insert',
            type: DataTypes.DATE,
            allowNull: true
        },
        idRestaurant: {
            field: 'id_restaurant',
            type: DataTypes.INTEGER,
            allowNull: true
        }
	}, 
	{
		tableName: 'tb_food', 
		freezeTableName: true, 
		underscored: true,
		timestamps: false,
	});

    return Food;
};