var Workflow = require("zenaton").Workflow;
var PrepareOrder = require("./PrepareOrder");
var SendOrder = require("./SendOrder");

module.exports = Workflow("OrderWorkflow", {
    handle: function() {
        new PrepareOrder(this.item).execute();
        new SendOrder(this.$data).execute();
    },
    onEvent: function(event) {
        if (event.name === "AddressUpdatedEvent") {
            this.address = event.address;
        }
    },
    getId: function() {
        return this.item;
    },
    onStart: function(task) {
        console.log(task.name);
    }
});
