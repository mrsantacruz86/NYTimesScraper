const mysql = require('mongoose');

var config;
if(process.env.JAWSDB_URL){
  // Production Database Configuration
  config = process.env.JAWSDB_URL;
} else{
  // Develoment Database Configuration
  config = {
    host: process.env.MYSQL_HOST_DEVELOPMENT,
    port: process.env.MYSQL_PORT_DEVELOPMENT,
    user: process.env.MYSQL_USER_DEVELOPMENT,
    password: process.env.MYSQL_PASSWORD_DEVELOPMENT,
    database: process.env.MYSQL_DATABASE_DEVELOPMENT
  }
}

module.exports = conn;