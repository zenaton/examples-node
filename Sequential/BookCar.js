var Zenaton = require('zenaton-javascript');

var _ = require('lodash');

var bookCar = new Zenaton.Task({
    name: 'BookCar',
    handle: function(done) {
        console.log('Reserving car for trip ID: ' + this.id);
        const that = this;
        setTimeout(function(){
            that.car_id = '1547826842785';
            done(null, that.car_id);
        }, _.random(1, 3) * 1000 );

    }
});

module.exports = bookCar;
