## It is time to run!

Start by rebuilding docker-compose with the new `docker-compose.yaml` file. You have to do this as the application was altered when you added the datadog agent and the environment variables for the application.

`docker-compose build`{{execute}}

Next, run the stack:

`docker-compose up -d`{{execute}}

## Let's add some users!

An application is nothing without its users! Let's add a very energetic one. This one makes a random call to the API every 200 ms. 

`docker run --network=host -d --env INTERVAL_MS=200 --name todo_bot brogard/simple_datadog_tutorial_user_bot`{{execute}}

**Note:** If you cannot start this bot, it is because you forgot to delete the one from step 2. Run the stop and remove command that you find in **Clean up** below.

## Let's watch!

Now for what you have waited for, what can you see in DataDog?

Make sure that you are still logged in, and that you have left the agent setup if you just created an account (you can press the logo in the upper left corner).

Once in the DataDog platform: 
1. Go to APM <img src="https://github.com/andrebrogard/katacoda-scenarios/blob/main/datadog-tutorial/APM.png?raw=true" alt="APM Icon" width="18px" />
2. Click on Services
3. Go to app

Here, you can see graphs and stats of how the application performs. If you connect other applications, you can observe them in the same way.

In the 'app' service you see stats of the REST API. You can also navigate to the 'app-mongodb' service where you will see similar stats of the different database queries.

**Note:** You may have to wait up to a minute before the 'app' service shows up. This is partly because the DataDog agent may not forward the data immiediately.

### Optional 

You can compare the information in DataDog to the logs of the application in the terminal by running the following command, in the same way as in step 2:

`docker-compose logs --tail 5 -f app`{{execute}}

To stop the logs press ` `{{execute interrupt}}

## Clean up

Stop and remove the bot.

`docker stop todo_bot && docker rm todo_bot`{{execute}}

Take the application, database and DataDog agent down.

`docker-compose down`{{execute}}

## Next
Now it is your turn to integrate DataDog in your own applications :D