var client = require('./client');
var RetentionWorkflow = require('./WaitWhile/RetentionWorkflow');
var UserRetentionEvent = require('./WaitWhile/UserRetentionEvent');

var data = {
    email: 'user@yoursite.com'
};

var response = client.start(new RetentionWorkflow(data));
console.log(response);

var instance = client.find('RetentionWorkflow').byId(data.email);
setTimeout(function(){
    response = instance.sendEvent(new UserRetentionEvent());
    console.log(response);

    setTimeout(function(){
        response = instance.sendEvent(new UserRetentionEvent());
        console.log(response);


        setTimeout(function(){
            response = instance.sendEvent(new UserRetentionEvent());
            console.log(response);

        }, 2 * 1000 );
    }, 2 * 1000 );
}, 2 * 1000 );
