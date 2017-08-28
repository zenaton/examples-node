
var Zenaton = require('zenaton-javascript');

var SendInvitation = require('./SendInvitation');

var _ = require('lodash');


var SendInvitationsWorkflow = new Zenaton.Workflow({
    name: 'SendInvitationsWorkflow',

    handle: function() {
        _.each(this.data.names, (name) => {
            executeAsync(new SendInvitation(name))
        });
    }

});

module.exports = SendInvitationsWorkflow;
