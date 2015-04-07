//respond to events
window.addEventListener('message',function(event) {
	if(event.origin !== 'http://localhost'){
		console.log(event.origin);
		return;
	};
	console.log('message received:  ' + event.data,event);
	event.source.postMessage('holla back youngin!',event.origin);
},false);