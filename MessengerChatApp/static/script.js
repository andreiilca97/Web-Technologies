
const socket = io('http://localhost:3000');


const name = prompt('Introduce name: ');

const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

const messageReceived = document.getElementById('received-container');
const messageSent = document.getElementById('sent-msg');
//const messageReceived = document.getElementById('cb-container');
//const messageSent = document.getElementById('cb-container');
const userImage1 = document.getElementById('imgUser1');
//const sMsg = document.getElementById('s-msg');
const pageMsgContainer = document.getElementById('cb-container');



//const loginForm = document.getElementById('send-container');


appendHeaderName(name);

socket.emit('new-user', name);

socket.on('chat-message', data =>{
    // setHeader('');
     console.log(data);
     
     
 });

 socket.on('received-chat', data=>{
    //console.log(`${message}`);
    console.log(data);
    
   // outputMessage(`${data.name}: ${data.message}`);
  // outputMessage(`${data.name}: ${data.message}`);
  displayReceivedMessage(`${data.name}: ${data.message}`);
  //function displayReceivedMessage(`${data.name}:${data.message}`);
   //displayReceivedMessage(outputMessage.messageReceived);
   pageMsgContainer.scrollTop = pageMsgContainer.scrollHeight;
 });


//messageReceived.addEventListener('')

messageForm.addEventListener('submit', e =>{
     e.preventDefault();
     //get the introduced value inside message block:
     const message = messageInput.value;
     //showing the messages sent by the user to himself:
    //appendMessageSent(`You: ${message}`); //.innerText
    //appendMessageSent(`You: ${message}`);
    displaySentMessage(`You: ${message}`);
    pageMsgContainer.scrollTop =   pageMsgContainer.scrollHeight;
    // appendMessageReceived(`Him: ${message}`);
     //send info from client to server:
     socket.emit('send-chat-message', message);
     //after sending the value, we want to empty the message bar block !
     messageInput.value = '';
     socket.emit('received-chat', message);

     
        
     });

//appending the name value to header bar:
function appendHeaderName(name, status){
    //we want to create a div which will be displayed inside of our message-contaier:
    const userName = document.getElementById('user-name');
    //now we add the name of user to our container:
    userName.innerText = name;
    //now we add the status of user to our container:
    const userNameStatus = document.getElementById('status');
    userNameStatus.innerText = 'Active Now';
    //userName.append(name);
    console.log(userName);

}

function appendMessageSent(message){
    
    //we want to create a div which will be displayed inside of our message-contaier:
    const messageElement = document.createElement('p'); //div
    const breakLine = document.createElement('br');
    messageElement.innerText = message;
    //now we add the message element to our container:
   // sMsg.append(messageElement);
   const senderImage = document.getElementById('sender-image');
   messageSent.append(messageElement,breakLine,senderImage);
  //pageMsgContainer.append(messageSent);
   // pageMsgContainer.append(appendMessageSent(message));
}

function outputMessage(message){
  
    
    const messageElement = document.createElement('p'); //div
    const breakLine = document.createElement('br');
   // const imageElement = document.createElement('img');
    //const iE = img.getElementById('imgUser1');
    
    messageElement.innerText = message;
    messageReceived.append(messageElement,breakLine, userImage1);
   
}

function displaySentMessage(message){


const div = document.createElement('div');

// classList gives us all the classes
div.classList.add('message'); // we add the class of 'message'
div.innerHTML = `
</br>
<div class="outgoing-chats-msg" id="sent-msg">
   <p>${message}</p> 
   </br>
     </div>
     
     `;

document.querySelector('.msg-page').appendChild(div);
}

function displayReceivedMessage(message){
  
    const div = document.createElement('div');
    div.classList.add('receivedMessage');
    
     div.innerHTML = `
        </br>
     <div class="received-msg"id="received-container" >
        <p>${message} </br> </p> 
        </div>
     </br>
     `;
     document.querySelector('.msg-page').appendChild(div);
     
}




function appendSentToPageContainer(message){
    const messageElement = document.createElement('div'); //div
    const breakLine = document.createElement('br');

    messageElement.innerText = message;
    
       pageMsgContainer.append(appendMessageSent(message));
}

/*
messageReceived.addEventListener('messageReceived',e =>{
    e.preventDefault();
    const messageR = messageReceived.value;
    appendMessageReceived(`Him: ${messageR}`);
    socket.emit('received-chat-message', messageR);
});
 */


 /*function appendMessageReceived(message){
    
    //we want to create a div which will be displayed inside of our message-contaier:
    const messageElement = document.createElement('p'); //div
    const breakLine = document.createElement('br');
    messageElement.innerText = message;
    //now we add the message element to our container:
   // sMsg.append(messageElement);
   //const senderImage = document.getElementById('sender-image');
   messageReceived.append(messageElement,breakLine);
   
}
*/

//socket.emit('received-chat', messageForm.message);


//works but not well
   /*
     outputMessage(`${message}`);
     
    socket.emit('received-chat-message', message);
*/
     
     /*const messageR = messageReceived.value;
     appendMessageReceived(`Him: ${messageR}`);
     socket.emit('reived-chat-value');
*/

     /*messageReceived.addEventListener('receive',e =>{
        e.preventDefault();
        const messageR = messageReceived.value;
        appendMessageReceived(`Him: ${messageR}`);
        socket.emit('received-chat', messageR); });
*/
