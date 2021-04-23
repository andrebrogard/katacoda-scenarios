Now you are ready to implement DataDog in the application

## Implement DataDog in the application 

### What is a tracer? 

To implement DataDog in the application, you will add a tracer to the nodejs application. You will use DataDog's javascript tracer. It integrates easily with popular packages such as express and mongodb (the packages that the application uses).
The tracer will generate rich logs from the express and mongodb package and send these to the DataDog Agent that we created and made available in the previous step. The DataDog Agent will forward thes logs to the DataDog site, it will become available to you through their platform.

### Tracer Installation

First of all, you need to make the `dd-trace` npm package available for the application. It is DataDog's ready-made javascript package. You could add the package by writing or copying it directly to package.json, but it is easier to run:

`npm install dd-trace`{{execute}}

Next:

Open the `index.js`{{open}} file.

You need to initialize the tracer. Add the followig code snippet at the top of the entryfile, because it can then automatically attach to and trace the express and mongodb package.

<pre class="file" data-filename="index.js" data-target="insert" data-marker="// TODO: Insert trace">
const tracer = require('dd-trace').init()
</pre>

## Next
Now the integration is complete and it is time to run the stack.
