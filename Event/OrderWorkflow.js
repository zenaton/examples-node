var Workflow = require("zenaton").Workflow;
var PrepareOrder = require("./PrepareOrder");
var SendOrder = require("./SendOrder");

module.exports = Workflow(
    "OrderWorkflow",
    function() {
        new PrepareOrder(this.item).execute();
        new SendOrder(this).execute();
    }, {
        onEvent: function(event_name, event_data) {
            if (event_name === "AddressUpdatedEvent") {
                this.address = event_data.address;
            }
        },
        getId: function() {
            return this.item;
        },
        onStart: function(task) {
            console.log(task.name);
        }
    }
);
