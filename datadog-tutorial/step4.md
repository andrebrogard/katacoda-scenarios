Now we are ready to make changes to our application

## Application changes
First of all, we need to make available the `dd-trace` npm package for our application. We could add the package directly to package.json, but it is easier to run

`npm install dd-trace`{{execute}}

Next up, we need to make sure we 

Open the `index.js`{{open}} file.

We need to initialize the tracer. We do this at the top of the entryfile because it can then automatically attach to and trace the express and mongodb package.

<pre class="file" data-filename="index.js" data-target="insert" data-marker="// TODO: Insert trace">
const tracer = require('dd-trace').init()
</pre>

Now we have actually completed our integration. It is time for us to run the stack. 

## It is time to run!
We start by rebuilding our compose file, becuase we have altered the application and added the datadog agent since the last time it was built.

`docker-compose build`{{execute}}

Next, we can run the stack

`docker-compose up -d`{{execute}}

## Lets add some users!

An application is nothing without its users. Lets add a very energetic one. This one makes a call to the api every 100 ms. 

`docker run --network=host -d --env INTERVAL_MS=100 --name todo_bot brogard/simple_datadog_tutorial_user_bot`{{execute}}

Note: If you cannot start this one, it is becuase you forgot to delete it before. Run the stop and remove command below.

## Lets Watch!

Now for what we have waited for, what can we see in DataDog?

Once logged in to the DataDog app (app.datadog.eu)
1. Go to APM
2. Go to Services
3. Go to app

Here we can see graphs of how our services perform and how they



