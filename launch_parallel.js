
var client = require('./client');
var ParallelWorkflow = require('./Parallel/ParallelWorkflow');

var item = {
    item: 'shirt'
};

var response = client.start(new ParallelWorkflow(item));
console.log(response);
