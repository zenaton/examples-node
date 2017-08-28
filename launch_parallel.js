
var client = require('./client');
var ParallelWorkflow = require('./Parallel/ParallelWorkflow');

var item = {
    item: 'shirt'
};

var instance = client.start(new ParallelWorkflow(item));
console.log('launched! ' + instance.getId());
