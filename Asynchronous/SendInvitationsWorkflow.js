var Workflow = require("zenaton").Workflow;
var SendInvitation = require("./SendInvitation");

module.exports = Workflow("SendInvitationsWorkflow", function() {
    this.forEach(function (name) {
        new SendInvitation(name).dispatch();
    });
});
