Now we are ready to make changes to our application
// eva: har inte vi redan make changes i application iom att man ändrade yaml file ? 

## Application changes

First of all, we need to make the `dd-trace` npm package available for our application. We could add the package directly to package.json, but it is easier to run directly from the command line. 

`npm install dd-trace`{{execute}}

Next:

Open the `index.js`{{open}} file.

You need to initialize the tracer. We do this at the top of the entryfile because it can then automatically attach to and trace the express and mongodb package.

// eva: förklara vad tracer är typ? 

<pre class="file" data-filename="index.js" data-target="insert" data-marker="// TODO: Insert trace">
const tracer = require('dd-trace').init()
</pre>

Now you have actually your integration. It is time to run the stack. 

## It is time to run!
Start by rebuilding your compose file, because the application has been altered by adding the datadog agent since the last time it was built.

`docker-compose build`{{execute}}

Next, run the stack.

`docker-compose up -d`{{execute}}

## Let's add some users!

An application is nothing without its users. Lets add a very energetic one. This one makes a call to the api every 100 ms. 

`docker run --network=host -d --env INTERVAL_MS=100 --name todo_bot brogard/simple_datadog_tutorial_user_bot`{{execute}}

Note: If you cannot start this one, it is because you forgot to delete it before. Run the stop and remove command below.

// eva: ska man bara hänvisa dem till command i step 2 ? 

## Let's Watch!

Now for what you have waited for, what can we see in DataDog?

Once logged in to the DataDog app (app.datadog.eu)
1. Go to APM
2. Go to Services
3. Go to app

Here you can see graphs of how your services perform and how they

// eva : meningen stannade här 