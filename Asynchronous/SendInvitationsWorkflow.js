var Workflow = require('zenaton').Workflow;
var SendInvitation = require('./SendInvitation');

var _ = require('lodash');


module.exports = Workflow('SendInvitationsWorkflow', {
    handle: function() {
        _.each(this.names, (name) => {
            new SendInvitation(name).dispatch()
        });
    }

});
