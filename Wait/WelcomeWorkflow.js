var Zenaton = require('zenaton-javascript');
var Wait = Zenaton.Wait;
var SendWelcomeEmail1 = require('./SendWelcomeEmail1');
var SendWelcomeEmail2 = require('./SendWelcomeEmail2');
var SendWelcomeEmail3 = require('./SendWelcomeEmail3');

module.exports = new Zenaton.Workflow({
    name: 'WelcomeWorkflow',
    handle: function() {
        execute(new SendWelcomeEmail1(this.data.email));

        execute((new Wait().seconds(4)));

        execute(new SendWelcomeEmail2(this.data.email));

        execute((new Wait().seconds(4)));

        execute(new SendWelcomeEmail3(this.data.email));
    }
});
