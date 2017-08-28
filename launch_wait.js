
var client = require('./client');
var WelcomeWorkflow = require('./Wait/WelcomeWorkflow');

var user = { email: 'user@yoursite.com' };

 var instance = client.start(new WelcomeWorkflow(user));
 console.log('launched! ' + instance.getId());
// transportBookingWorkflow(request).handle()
