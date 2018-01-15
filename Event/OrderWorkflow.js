var { Workflow } = require("zenaton");
var PrepareOrder = require("./PrepareOrder");
var SendOrder = require("./SendOrder");

module.exports = Workflow("OrderWorkflow", {
  init(item, orderId, address) {
    this.item = item;
    this.orderId = orderId;
    this.address = address;
  },
  handle() {
    new PrepareOrder(this.item).execute();
    new SendOrder(this).execute();
  },
  onEvent(eventName, eventData) {
    if (eventName === "AddressUpdatedEvent") {
      this.address = eventData.address;
    }
  },
  id() {
    return this.orderId;
  }
});
