require("./client");
var RetentionWorkflow = require("./WaitWhile/RetentionWorkflow");
var UserRetentionEvent = require("./WaitWhile/UserRetentionEvent");

new RetentionWorkflow({email: "user@yoursite.com"}).dispatch();


var instance = client.find("RetentionWorkflow").byId(data.email);
setTimeout(function(){
    response = instance.sendEvent(new UserRetentionEvent());
    console.log(response);
    setTimeout(function(){
        response = instance.sendEvent(new UserRetentionEvent());
        console.log(response);
        setTimeout(function(){
            response = instance.sendEvent(new UserRetentionEvent());
            console.log(response);
        }, 2000 );
    }, 2000 );
}, 2000 );
