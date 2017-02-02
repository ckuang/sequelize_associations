"use strict";

module.exports = function(sequelize, DataTypes) {
  var Follow = sequelize.define("Follow", {}, {
    classMethods: {
      associate: function(models) {
        Follow.belongsTo(models.User, {as: 'follower'});
        Follow.belongsTo(models.User, {as: 'followed'});
      }
    }
  });

  return Follow;
};
