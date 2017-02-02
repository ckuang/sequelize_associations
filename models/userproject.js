"use strict";

module.exports = function(sequelize, DataTypes) {
  var UserProject = sequelize.define("UserProject", {
    
  }, {
    classMethods: {
      associate: function(models) {
        UserProject.belongsTo(models.User)
        UserProject.belongsTo(models.Project)
      }
    }
  });

  return UserProject;
};
