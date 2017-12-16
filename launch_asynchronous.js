require('./client');
var SendInvitationsWorkflow = require('./Asynchronous/SendInvitationsWorkflow');

var notifications = {
    names: ['Gilles', 'Julien', 'Oussama', 'Alice', 'Charlotte', 'Balthazar', 'Annabelle', 'Louis']
};

var response = client.start(SendInvitationsWorkflow(notifications));
console.log(response);
