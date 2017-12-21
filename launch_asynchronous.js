require("./client");
var SendInvitationsWorkflow = require("./Asynchronous/SendInvitationsWorkflow");

var recipients = ["Gilles", "Julien", "Oussama", "Alice", "Charlotte", "Balthazar", "Annabelle", "Louis"];

new SendInvitationsWorkflow(recipients).dispatch();
