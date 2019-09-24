try{
    var express = require('express');
    var app = express();
    console.log(__dirname);
    app.use(express.static(__dirname)); //__dir and not _dir
    var port = 80; // you can use any port
    app.listen(port);
    console.log('server on' + port);
}
catch(ex){
    console.log(ex);
}
