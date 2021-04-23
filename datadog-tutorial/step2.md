
In this step, you will run the application without DataDog.  

First, go to the correct folder in the terminal by clicking below.

`cd /root/code/tutorialApp/`{{execute}}

## The application
The application is a nodejs express app, it exposes a to-do rest api at /api/todo and a minimal interface at '/' where you can interact with the application.
The API supports GET, POST and DELETE of todos. In the background it uses a mongodb instance.

We deploy both of these using docker and docker-compose. 

While this tutorial does not require knowledge of nodejs/express, mongodb or docker it is beneficial if the reader is familiar with the technologies to understand several steps. 

## Deploy the app

Deploy the application by clicking below. 
What the command does is that the compose file will start a nodejs app and a mongodb instance. 

`docker-compose up -d`{{execute}}

To see the to-do application UI running, follow this link:

https://[[HOST_SUBDOMAIN]]-3000-[[KATACODA_HOST]].environments.katacoda.com

## Simulate users
To simulate user activity, we have written a very simple bot that randomly interacts with the API. It will call the API every 500 ms.

Run the bot by clicking below. 

`docker run --network=host -d --env INTERVAL_MS=500 --name todo_bot brogard/simple_datadog_tutorial_user_bot`{{execute}}

## Observe the traffic

We can observe the logs of the application by running:

`docker-compose logs --tail 5 -f app`{{execute}}

You can also interact with the application yourself and see what happens in the logs. 

To stop the logs press ``{{execute interrupt}}

### But this kind of logging is awkward!

Here, you saw logs from print statements in the application which are called at the same time as the functions.
This works as a simple way of seeing what is happening in the app, but is not sufficient in a more complex environment,
for example in a company which supports many hosts and applications that produces their own logs. By gathering logs 
from the docker containers output we loose a lot of information, even if we enrich these logs as best we can. 
It is not a scalable solution for logging. 

We need some form of integrated logging solution, one that can time every request and report on it from all our applications
and gather this in a comprehensible way. One solution for this is DataDog!

## Clean up

Stop and remove the bot.

`docker stop todo_bot && docker rm todo_bot`{{execute}}

Take the application and database down.

`docker-compose down`{{execute}}

## Next

You will set up your own DataDog account!
