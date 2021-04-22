
In this step, you will run the application without DataDog.  

## Deploy the app and observe the traffic

Deploy the application. The compose file will start a nodejs app and a mongodb instance. 

`docker-compose up -d`{{execute}}

To see the todo application UI running, follow this link. The underlying api supports GET, POST and DELETE of todos.

https://[[HOST_SUBDOMAIN]]-3000-[[KATACODA_HOST]].environments.katacoda.com

To simulate user activity, we have written a very simple bot that randomly interacts with the api. It will call the api every 300 ms. 

`docker run --network=host -d --name todo_bot brogard/simple_datadog_tutorial_user_bot`{{execute}}

We can observe the logs of the application by running:

`docker-compose logs --tail 5 -f app`{{execute}}

You can also interact with the application and see what happens in the logs. 

To stop the logs:

`Interrupt`{{execute interrupt}}


### But this kind of logging is awkward!
Here, we saw logs from print statements in the application which are called at the same time as the function.
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

We will set up DataDog tracing!

