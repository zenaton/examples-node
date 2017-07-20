var Zenaton = require('zenaton-javascript');
var Wait = Zenaton.Wait;
var WaitWhile = Zenaton.WaitWhile;

var waitWorkflow = new Zenaton.Workflow({
    name: 'WaitWorkflow',
    handle: function() {

        execute((new Wait().seconds(15)));
    }
});

module.exports = waitWorkflow;
