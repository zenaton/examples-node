import express from 'express';
import client from '../src/zenaton_client'
const publicPath = __dirname + '/../dist'

export default (app, http) => {
  app.use(express.json());
  app.use(express.static(publicPath, {}))

  app.post('/api/:workflow_name/dispatch', async (req, res) => {
    console.log(`Dispatch a new instance of ${req.params.workflow_name} with inputs params: ${JSON.stringify(req.body, null, 2)}`)

    const {id} = await client.run.workflow(req.params.workflow_name, ...req.body)

    res.json({id});
  });

  app.post('/api/:workflow_id/event', function (req, res) {
    console.log(`Send an event ${req.body.name} to the instance ${req.params.workflow_id} with data: ${JSON.stringify(req.body.data, null, 2)}`)
  
    // Send an event to a Zenaton Workflow instance
    client.select
      .workflow()
      .withId(req.params.workflow_id)
      .send(req.body.name, ...req.body.data)
  
    res.json({})
  })
}
