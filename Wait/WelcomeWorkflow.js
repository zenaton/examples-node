var Zenaton = require('zenaton');
var Workflow = Zenaton.Workflow;
var Wait = Zenaton.Wait;
var SendWelcomeEmail1 = require('./SendWelcomeEmail1');
var SendWelcomeEmail2 = require('./SendWelcomeEmail2');
var SendWelcomeEmail3 = require('./SendWelcomeEmail3');

module.exports = Workflow('WelcomeWorkflow', {
    handle: function() {
        new SendWelcomeEmail1(this.email).execute();

        new Wait().seconds(4).execute();

        new SendWelcomeEmail2(this.email).execute();

        new Wait().seconds(4).execute();

        new SendWelcomeEmail3(this.email).execute();
    }
});
