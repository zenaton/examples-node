var Workflow = require("zenaton").Workflow;
var PrepareOrder = require("./PrepareOrder");
var SendOrder = require("./SendOrder");

module.exports = Workflow(
    "OrderWorkflow",
    {
        handle: function() {
            new PrepareOrder(this.item).execute();
            new SendOrder(this).execute();
        },
        onEvent: function(eventName, eventData) {
            if (eventName === "AddressUpdatedEvent") {
                this.address = eventData.address;
            }
        },
        id: function() {
            return this.orderId;
        },
        onStart: function(task) {
            console.log(task.name);
        }
    }
);
