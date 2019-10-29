var db = require('./db');
module.exports = {
    registerUser: function(user, callbackFromController){
        var sql = "INSERT INTO users VALUES (null, ?, ?, ?,' ',' ', ?)";
        db.execute(sql, [user.name, user.email, user.password,user.status], function(result){
            callbackFromController(result);
        });

    }
};



 var sql = "INSERT INTO seat VALUES (null, ?, ?)";
        db.execute(sql, [box.booked, box.book], function( ){
            callbackFromController( );
        });
