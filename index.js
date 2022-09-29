const express = require('express');
const bodyparser = require('body-parser');

const app = express();
const port = process.env. PORT || 3000;
const cors = require("cors");
app.use(cors({origin: "x"}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended :false}))

const apiv1 = require('./api/v1/routing');
app.use('/api/v1', apiv1);

// get hostname
let hostname;
if(process.env.VCAP_APPLICATION) {
    const vcap = JSON. parse (process.env.VCAP_APPLICATION);
    hostname = 'https://' + vcap.application_uris[0];
}else {
hostname = `http://localhost:$(port)`}

app.listen(port,function(){
console.log('Listening at port 3000')
})

module.export = app