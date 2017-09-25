var Zenaton = require('zenaton-javascript');
var Wait = Zenaton.Wait;
var SendActivateEmail1 = require('./SendActivateEmail1');
var SendActivateEmail2 = require('./SendActivateEmail2');

module.exports = new Zenaton.Workflow({
    name: 'ActivationWorkflow',
    handle: function() {
        var event;

        execute(new SendActivateEmail1(this.data.email));
        event = execute((new Wait('UserActivatedEvent')).seconds(5));
        if (event) {
            console.log('user activated at stage 1 - ' + event.action);
            return;
        }

        execute(new SendActivateEmail2(this.data.email));
        event = execute((new Wait('UserActivatedEvent')).seconds(5));
        if (event) {
            console.log('user activated at stage 2 - ' + event.action);
            return;
        }
    },
    getId() {
        return this.data.email;
    }
});
