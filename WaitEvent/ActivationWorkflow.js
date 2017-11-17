var Zenaton = require('zenaton-javascript');
var Wait = Zenaton.Wait;
var SendActivateEmail1 = require('./SendActivateEmail1');
var SendActivateEmail2 = require('./SendActivateEmail2');
var LogActivateUser = require('./LogActivateUser');

module.exports = new Zenaton.Workflow({
    name: 'ActivationWorkflow',
    handle: function() {
        var event;
        var tmp;

        [tmp, event] = execute(
            new SendActivateEmail1(this.data.email),
            (new Wait('UserActivatedEvent')).seconds(5)
        );

        if (event) {
            return execute(new LogActivateUser(1));
        }

        [tmp, event] = execute(
            new SendActivateEmail2(this.data.email),
            (new Wait('UserActivatedEvent')).seconds(5)
        );

        if (event) {
            return execute(new LogActivateUser(2));
        }

        execute(new LogActivateUser(3));
    },
    getId() {
        return this.data.email;
    }
});
