var Zenaton = require('zenaton-javascript');
var Wait = Zenaton.Wait;
var SendWelcomeEmail1 = require('./SendWelcomeEmail1');
var SendWelcomeEmail2 = require('./SendWelcomeEmail2');
var SendWelcomeEmail3 = require('./SendWelcomeEmail3');

module.exports = new Zenaton.Workflow({
    name: 'WelcomeWorkflow',
    handle: function() {
        execute(new SendWelcomeEmail1({email: this.email}));

        execute((new Wait().seconds(4)));

        execute(new SendWelcomeEmail2({email: this.email}));

        execute((new Wait().seconds(4)));

        execute(new SendWelcomeEmail3({email: this.email}));
    }
});
