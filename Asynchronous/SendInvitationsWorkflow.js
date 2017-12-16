var Workflow = require("zenaton").Workflow;
var SendInvitation = require("./SendInvitation");

module.exports = Workflow("SendInvitationsWorkflow", {
    handle: function() {
        this.names.forEach(function (name) {
            new SendInvitation(name).dispatch();
        });
    }
});
