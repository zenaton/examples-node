
var client = require('./client');
var SendInvitationsWorkflow = require('./Asynchronous/SendInvitationsWorkflow');

var notifications = {
    names: ['Gilles', 'Julien', 'Oussama', 'Alice', 'Charlotte', 'Balthazar', 'Annabelle', 'Louis']
};

 var instance = client.start(new SendInvitationsWorkflow(notifications));
 console.log('launched! ' + instance.getId());
