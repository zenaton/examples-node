var client = require('./client');
var ActivationWorkflow = require('./WaitEvent/ActivationWorkflow');
var UserActivatedEvent = require('./WaitEvent/UserActivatedEvent');

var instance = client.start(new ActivationWorkflow({ email: 'user@yoursite.com' }));
console.log('launched! ' + instance.getId());

setTimeout(function(){
    instance.sendEvent(new UserActivatedEvent({ action: 'User did an important action' }));
    console.log("event sent!");
}, 3000 );
