var orm = require('../config/orm.js');

var burger = {
    create: function(burgerName, callBack) {
        orm.insertOne('burgers', 'burger_name', burgerName, callBack);
    },

    all: function(callBack) {
        orm.selectAll('burgers', callBack);
    },

    devour: function(burgerId, callBack) {
        orm.updateOne('burgers', 'devoured', '1', 'id', burgerId, callBack);
    }
};

module.exports = burger;

// function callBack(data) {
//     console.log(data);
// }