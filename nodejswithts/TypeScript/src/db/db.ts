// db
import { Sequelize } from "sequelize";

export const connection = new Sequelize("todo", "test", "1234", {
  host: "localhost",
  dialect: "postgres",
    
  //   storage: "db.postgres",
  // operatorsAliases: false,
},);

export const dbconnection = () => {
  connection
    .authenticate()
    .then(() => {
      console.log("Conection Established ....");
    })
    .catch((err) => {
      console.log(err.message);
    });
};
