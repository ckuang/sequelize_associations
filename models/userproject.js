"use strict";

module.exports = function(sequelize, DataTypes) {
  var UserProject = sequelize.define("UserProject", {}, {
    classMethods: {
      associate: function(models) {
      }
    }
  });

  return UserProject;
};
