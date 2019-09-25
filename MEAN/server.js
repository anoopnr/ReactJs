try{
    var express = require('express');
    var app = express();
    console.log(__dirname);
    app.use(express.static(__dirname)); //__dir and not _dir
    var port = 8000; // you can use any port
    app.listen(port);
    console.log('server on' + port);
    app.get('/',(req,res)=>{
        res.sendFile(__dirname+'/Index.html');
    })
}
catch(ex){
    console.log(ex);
}
