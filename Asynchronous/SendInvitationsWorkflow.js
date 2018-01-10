var { Workflow } = require("zenaton");
var SendInvitation = require("./SendInvitation");

module.exports = Workflow("SendInvitationsWorkflow", function() {
  this.forEach(function (name) {
    new SendInvitation(name).dispatch();
  });
});
