var client = require('./client');
var RetentionWorkflow = require('./WaitWhile/RetentionWorkflow');
var UserRetentionEvent = require('./WaitWhile/UserRetentionEvent');

var instance = client.start(new RetentionWorkflow({ email: 'user@yoursite.com' }));
console.log('launched! ' + instance.getId());

setTimeout(function(){
    instance.sendEvent(new UserRetentionEvent());
    console.log("event sent!");

    setTimeout(function(){
        instance.sendEvent(new UserRetentionEvent());
        console.log("event sent!");

        setTimeout(function(){
            instance.sendEvent(new UserRetentionEvent());
            console.log("event sent!");

            setTimeout(function(){
                instance.sendEvent(new UserRetentionEvent());
                console.log("event sent!");
            }, 2000 );
        }, 2000 );
    }, 2000 );
}, 2000 );
