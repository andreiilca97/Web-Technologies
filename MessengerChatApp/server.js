const http = require('http');
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const fs = require('fs');
const formatMessage = require('./static/messages');



app.get('/', (req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    fs.readFile('login.html',(err, data)=>{
        if(err){
            res.writeHead(400);
            res.write('Error: File not Found');
          }else{
            res.write(data);
          }

          fs.readFile('loginScript.js',(err,data)=>{

          });
          
          res.end();
        });

      
        
             
        app.use(express.static(path.join(__dirname, 'static')));
    app.use("/static", express.static('./static/'));
    
});



app.get('/', (req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    fs.readFile('index.html',(err, data)=>{
        if(err){
            res.writeHead(400);
            res.write('Error: File not Found');
          }else{
            res.write(data);
          }

          fs.readFile('script.js',(err,data)=>{

          });
          
          res.end();
        });

        
             
        app.use(express.static(path.join(__dirname, 'static')));
    app.use("/static", express.static('./static/'));
    
});




const server = app.listen(port);
const io = require('socket.io')(server);



//const receiver = require('appendMessageSent');

const users = {};
io.on('connection', socket =>{
    //socket.on('new user', name);
    
  socket.on('new-user', name =>{
    
    
    
    users[socket.id] = name;
    socket.broadcast.emit('User connected', name);
   // console.log(users[socket.id]);
});

    console.log('user connected');
    
    
    
     socket.on('send-chat-message', message =>{
        console.log(`${message}`);
        socket.broadcast.emit('chat-message', {message: message, name: users[socket.id]});
        //console.log(users[socket.id] + ' sent the message');
        
        
           
        
        
    });
    socket.on('received-chat', message => {
        
        socket.broadcast.emit('received-chat', {message: message, name: users[socket.id]});
    });
    /*
    socket.on('received-chat-message', message =>{
        console.log(`${message}`);
       // if(users.name != users.name){
        socket.broadcast.emit('received-chat', {message: message, name: users[socket.id]});
        console.log('message received ' + message);
        //console.log(users[socket.id]);
    //    }
    });
    */
   /* socket.on('received-chat-message', message =>{
        console.log(`${message}`);
        if(users.name != users.name){
        socket.emit('received-chat', {message: message, name: users[socket.id]});
        console.log(users[socket.id]);
        }
    }); */

    
    
    
    socket.on('disconnect', ()=>{
        console.log('User Disconnected');
        socket.broadcast.emit('user-disconnected', users[socket.id]);
        delete users[socket.id];
    });

});


