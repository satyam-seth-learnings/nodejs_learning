var mysql=require('mysql')
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'test'
});
con.connect(function(error){
    if(error)
        throw error;
    // console.log("connected");
    con.query("select * from users",function(error,result){
        if(error)
            throw error;
        // console.warn("all results are here",result);
        // console.warn("all results are here",result[0]);
        // console.warn("all results are here",result[0].name);
        console.warn("all results are here",result[0].email);
    })
})