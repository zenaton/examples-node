var Zenaton = require('zenaton-javascript');

var _ = require('lodash');

module.exports = new Zenaton.Task({
    name: 'PrepareOrder',
    handle: function(done) {
        console.log('Preparing order for item: ' + this.data);

        setTimeout(function(){
            console.log('Order prepared');
            done();
        }, _.random(5,10) * 1000 );

    }
});
