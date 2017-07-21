
var client = require('./client');
var orderWorkflow = require('./Event/OrderWorkflow');
var addressUpdatedEvent = require('./Event/AddressUpdatedEvent');

var data = {
    item: 'shirt',
    address: '1600 Pennsylvania Ave NW, Washington, DC 20500, USA'
};

 var instance = client.start(orderWorkflow(data));
 console.log('launched! ' + instance.getId());


 setTimeout(function(){
     instance.sendEvent(addressUpdatedEvent({address: 'One Infinite Loop Cupertino, CA 95014'}));
     console.log("event sent!");
 }, 2 * 1000 );
