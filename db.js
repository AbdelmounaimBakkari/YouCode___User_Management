const Sequelize = require('sequelize');
const db = new Sequelize('dbgestion', 'root', '',{
    host:"localhost",
    dialect:"mysql"
});

module.export = db;
