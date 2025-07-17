import { DataTypes } from "sequelize";
import sequelize from "../model/db.js";

const Restaurents = sequelize.define("restaurents", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

Restaurents.sync({ force: false })
    .then(() => {
        console.log("Table created or already exists");
    })
    .catch((error) => {
        console.log("Error creating table", error);
    });

export default Restaurents;
