import { QueryInterface } from "sequelize";
import { bulkUsers } from "../data/user.data";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert("Users", bulkUsers);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete("Users", {});
  },
};
