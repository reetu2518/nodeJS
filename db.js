var mysql = require('mysql');
var con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "call_record"
});
con.connect(function(error){
    if(error) throw error
    con.query("select * from user", function(err, result){
        if(err) throw err
        // for one record
        // console.warn("all records",result[0])

        // for record value
        console.warn("all records",result[0].name)
        console.warn("all records",result[0].email)

        // for all records
        // console.warn("all records",result)
    })
})