/*const http = require(`node:http`);
const hostname = `127.0.0.1`;
const port = 3000;
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});
server.listen(port, hostname, ()=>{
    console.log(`server running at http://${hostname}:${port}/`);
});
*/

/*const http = require(`http`);
const dt = require('./firstmodule');
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': `text/plain`});
    res.write("The date and time is currently: " + dt.myDateTime());
    res.end();
}).listen(8080);
PRINTING OUT CURRENT DATE AND TIME
*/
/*onst http = require('http');

//create a server object:
http.createServer((req, res)=>{
    res.write('hello world!'); //writess a response to the client
    res.end(); //ends the response
}).listen(8080); //the server object litens on port 8080
USING THE INBUILT MODULE http.createServer() method,
*/
/*const http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
PRINTS THE URL EXTENTION 
*/
/*const http = require('http');
const url = require('url');
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);
PRINTING THE URL EXTENTIOM "http://localhost:8080/?year=2017&month=July"
*/
/*
const http = require('http');
var fs = require('fs');
http.createServer((req, res)=>{
    fs.readFile('demo.html', (err, data)=>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    
    });
}).listen(8080);*/
//READING HTML FILE, adding contents to the file
/*const fs = require('fs');
fs.appendFile('mynewfile.txt', 'Hello Content', (err)=>{
    if (err) return err;
    console.log('saved');
});*/

/*
CREATED A NEW EMPTY FILE 
const fs = require('fs');
fs.open('mynewfile2.txt', 'w', (err, file)=>{
    if (err) return err;
    console.log('saved');

});*/

/*const fs = require('fs');
fs.write('mynewfile3.txt', 'Hello content!', (err)=>{
    if (err) return err;
    console.log('done succsessfullly');
});*/

/*
UPDATED FILE CONTENT 
const fs = require ('fs');
fs.appendFile('mynewfile2.txt', 'this is my text, i am wisdom', (err)=>{
    if (err) return err;
    console.log('updated');
});*/

/*
REPLCED FILE CONTENT
const fs = require('fs');
fs.writeFile('mynewfile2.txt', 'this is the replaced text', (err)=>{
    if (err) return err;
    console.log('Replaced');
});*/

/*
DELETED FILE
const fs = require('fs');
fs.unlink('mynewfile2.txt', (err)=>{
    if (err) return err;
    console.log('Deleted');
});*/

/*
URL MODULE
(const url = require('url');
const nodemon = require('nodemon');

const adr = 'http://localhost:8080/default.html?year=2024&month=april;';
var q = url.parse(adr, true);
console.log(q.query);
*/

/* NPM */
/* CONVERT TO UPERCASE
var http = require('http');
var str = "uppercase";
var res = str.toUpperCase();
console.log(res)

*/
/*
var events = require ('events');
var eventEmitter = new events.EventEmitter();
// CREATE AN EVENT HANDLER
var myEventHandler = ()=>{
    console.log("I hear a scream");
}

//ASSIGN THE HANDLER TO AN EVENT
eventEmitter.on('scream', myEventHandler);

//FIRE THE 'SCREAM' EVENT
eventEmitter.emit('scream');*/

/*

var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer((req, res)=>{
    if(req.url == "/fileupload"){
        var form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files)=>{
            var oldpath = files.filetoupload.path;
            var newpath = 'C:\Users\SULE_WISDOM\Desktop\Learning\Learning Node js\testingNodejs' + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, (err)=>{
                if (err) return err;
                res.write('File uploaded and moved!');
                res.end();

            });
            
        });
    }else{
      
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"> <br>');
    res.write('<input type="submit">');

    res.write('</form>');
    return res.end();
    }
}).listen(8080);
*/
///having an error here
/*git 
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: 'wizzybankz2017@gmail.com',
        pass: 'Wizzybankz@2019'
    }
});

var mailOptions = {
    from: 'wizzybankz2017@gmail.com',
    to: 'sulewisdomdavid@gmail.com',
    subject: 'Sending email using Nod.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info){
    if (error) {
        console.log(error);
    }else{
    console.log('Email sent: ' + info.response);
}
});
//seems i need to enable 2fa and also generate app password from this email for this too work perfectly
*/
//Learning MySQL
//CONNECTIONG TO A DATABASE
/*var mysql = require ('mysql2');
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Wizzybankz@2017"
});
con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
});*/
//QUERING And CREATING A DATABASE
/*var mysql = require ('mysql2');
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Wizzybankz@2017"
});
con.connect((err)=>{
    if (err) return err;
    console.log("COnnected");
    con.query("CREATE DATABASE mydb" , (err, result)=>{
        if(err) return err;
        console.log("Database created");
    });
});*/

//CREATE TABLE
var mysql = require ('mysql2');
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "Wizzybankz@2017",
    database: "mydb"
});


con.connect((err)=>{
    if (err) return err;
    console.log("Connected");
    var sql = " INSERT INTO customers (name, address) VALUES ?";
    var values = [
        ['Company inc', 'Highway 37'],
        ['peter', 'Lowcost 3'],
        ['john', 'upstreet'],
        ['joseph', 'downstreet']
    ];

    con.query(sql, [values], (err, result)=>{
        if(err) return err;

        console.log("NUmber of records inserted : " + result.affectedRows);
    });
});