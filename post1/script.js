//create popup window
var domain = 'http://localhost';
var myPopup = window.open('http://thirdparty/postM/third/index.html','myWindow');

//periodical message sender
setInterval(function(){
	var message = 'Hello!  The time is: ' + (new Date().getTime());
	console.log('post1  sending message:  ' + message);
	myPopup.postMessage(message,domain); //send the message and target URI
},6000);

//listen to holla back
window.addEventListener('message',function(event) {
	if(event.origin !== 'http://localhost'){
		console.log('Event origin: ', event.origin);
		return;
	}
	console.log('received response:  ',event.data);
},false);