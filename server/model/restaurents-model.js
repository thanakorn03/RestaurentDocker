import { DataTypes } from "sequelize";
import sequelize from "./db.js";

const Restaurant = sequelize.define('restaurants', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
     name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageURL: {
        type: DataTypes.STRING,
     allowNull: false
    }
}, {
  tableName: 'restaurants',
  timestamps: true
});

// Sync model to create table if not exists
Restaurant.sync({ alter: true })
  .then(() => {
    console.log('Table "restaurants" is ready');
  })
  .catch((error) => {
    console.error('Error syncing table:', error);
  });

export default Restaurant;