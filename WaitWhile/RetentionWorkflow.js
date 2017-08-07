var Zenaton = require('zenaton-javascript');
var WaitWhile = Zenaton.WaitWhile;
var SendRetentionEmail = require('./SendRetentionEmail');

module.exports = new Zenaton.Workflow({
    name: 'RetentionWorkflow',
    handle: function() {

        execute((new WaitWhile('UserRetentionEvent')).seconds(10));

        execute(new SendRetentionEmail(this.data.email));
    }
});
