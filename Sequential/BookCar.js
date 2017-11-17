var Zenaton = require('zenaton-javascript');

module.exports = new Zenaton.Task({
    name: 'BookCar',
    handle: function(done) {
        console.log('Reserving car for trip ID: ' + this.data);
        const that = this;
        setTimeout(function(){
            var car_id = '1547826842785';
            done(null, car_id);
        }, 2 * 1000 );

    }
});
