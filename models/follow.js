"use strict";

module.exports = function(sequelize, DataTypes) {
  var Follow = sequelize.define("Follow", {}, {
    classMethods: {
      associate: function(models) {
      }
    }
  });

  return Follow;
};
