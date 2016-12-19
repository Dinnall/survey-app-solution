"use strict";

module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define("Question", {
    question: DataTypes.STRING,
    choiceOne: DataTypes.STRING,
    choiceTwo: DataTypes.STRING,
    choiceThree: DataTypes.STRING,
    choiceFour: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(db) {
        Question.hasMany(db.Response)
      }
    }
  });

  return Question;
};
