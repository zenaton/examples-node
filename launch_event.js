
var client = require('./client');
var OrderWorkflow = require('./Event/OrderWorkflow');
var AddressUpdatedEvent = require('./Event/AddressUpdatedEvent');

var data = {
    item: 'shirt',
    address: '1600 Pennsylvania Ave NW, Washington, DC 20500, USA'
};

 var response = client.start(new OrderWorkflow(data));
console.log(response);
 var instance = client.find('OrderWorkflow').byId(data.item);
 setTimeout(function(){
     var response = instance.sendEvent(new AddressUpdatedEvent({address: 'One Infinite Loop Cupertino, CA 95014'}));
     console.log(response);
 }, 2 * 1000 );
