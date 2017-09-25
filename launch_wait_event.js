var client = require('./client');
var ActivationWorkflow = require('./WaitEvent/ActivationWorkflow');
var UserActivatedEvent = require('./WaitEvent/UserActivatedEvent');

var data = { email: 'user@yoursite.com' };
var response = client.start(new ActivationWorkflow(data));
console.log(response);

var instance = client.find('ActivationWorkflow').byId(data.email);
setTimeout(function(){
    response = instance.sendEvent(new UserActivatedEvent({ action: 'User did an important action' }));
    console.log(response);
}, 6000);
