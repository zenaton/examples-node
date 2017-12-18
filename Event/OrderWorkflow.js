var Workflow = require("zenaton").Workflow;
var PrepareOrder = require("./PrepareOrder");
var SendOrder = require("./SendOrder");

module.exports = Workflow("OrderWorkflow", {
    handle: function() {
        new PrepareOrder(this.item).execute();
        new SendOrder(this).execute();
    },
    onEvent: function(event, data) {
        if (event === "AddressUpdatedEvent") {
            this.address = data.address;
        }
    },
    getId: function() {
        return this.item;
    },
    onStart: function(task) {
        console.log(task.name);
    }
});
