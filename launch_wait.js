
var client = require('./client');
var WelcomeWorkflow = require('./Wait/WelcomeWorkflow');

var user = { email: 'user@yoursite.com' };

var response = client.start(new WelcomeWorkflow(user));
console.log(response);
