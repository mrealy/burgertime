var connection = require("../config/connection.js");

console.log('orm.js file is connected');

var orm = {

    selectAll: function(tableName, func) {
        connection.query('SELECT * FROM ??', [tableName], function(error, data) {
            if (error) {
                console.log(error);
            } else {
                func(data); //callback
            }
        });
    },

    insertOne: function(tableName, cols, values, func) {
        connection.query('INSERT INTO ?? (??) VALUES (?)', [tableName, cols, values], function(error, data) {
            if (error) {
                console.log(error);
            } else {
                func(data); //callback
            }
        });
    },

    updateOne: function(tableName,  setCol, setVal, whereCol, whereVal, func) {
        connection.query('UPDATE ?? SET ?? = ? WHERE ?? = ?', [tableName, setCol, setVal, whereCol, whereVal], function(error, data) {
            if (error) {
                console.log(error);
            } else {
                func(data); //callback
            }
        });
    }

};

module.exports = orm;
