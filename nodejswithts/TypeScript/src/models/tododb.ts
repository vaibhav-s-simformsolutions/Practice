import { Sequelize, DataTypes, UUID } from "sequelize";
import { connection } from "../db/db";

//model
const Tododb = connection.define(
  "Tododb",
  {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    text: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

// Tododb.beforeCreate(user => user.uuid  = uuid());
// Tododb.sync({
//   force: true,
//     alter: true,
// });

export default Tododb;
