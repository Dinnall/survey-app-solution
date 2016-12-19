"use strict";

module.exports = function(sequelize, DataTypes) {
  var Response = sequelize.define("Response", {
    choice: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(db) {
        Response.belongsTo(db.Question, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  });

  return Response;
};
