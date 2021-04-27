## Implement DataDog in the application

Now you are ready to implement DataDog in the application. 

### What is a tracer? 

To implement DataDog in the application, you will add a tracer to the Node.js application. You will use DataDog's JavaScript tracer. It integrates easily with popular packages such as express and mongoDB (the packages that the application uses).
The tracer will generate rich logs from the express and mongoDB package and send these to the DataDog Agent that we created and made available in the previous step. The DataDog Agent will forward thes logs to the DataDog site, it will become available to you through their platform.

### Tracer installation

First of all, you need to make the `dd-trace` npm package available for the application. It is DataDog's ready-made JavaScript package. You could add the package by writing or copying it directly to package.json, but it is easier to run:

`npm install dd-trace`{{execute}}

Next open the `index.js`{{open}} file.

You need to initialize the tracer. Add the following code snippet at the top of the entryfile, because it can then automatically attach to and trace the express and mongoDB package.

<pre class="file" data-filename="index.js" data-target="insert" data-marker="// TODO: Insert trace">
const tracer = require('dd-trace').init()
</pre>

## Next
Now the integration is complete and it is time to run the stack.

In the next step, you will build and run your docker-compose environment, and your DataDog agent will also run and will be accessible to the application. 

