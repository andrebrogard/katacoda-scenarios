## It is time to run!

Start by rebuilding the compose file, because the application has been altered by adding the datadog agent since the last time it was built:

`docker-compose build`{{execute}}

Next, run the stack:

`docker-compose up -d`{{execute}}

## Let's add some users!

An application is nothing without its users. Lets add a very energetic one. This one makes a call to the api every 100 ms. 

`docker run --network=host -d --env INTERVAL_MS=100 --name todo_bot brogard/simple_datadog_tutorial_user_bot`{{execute}}

**Note:** If you cannot start this bot, it is because you forgot to delete the one before. Run the commands that you find in **Clean up** step below.

## Let's Watch!

Now for what you have waited for, what can you see in DataDog?

Make sure you are still logged in and that you have left the Agent setup (you can press the logo in the upper left corner).

Once in the DataDog platform (app.datadog.eu)
1. Go to APM
2. Go to Services
3. Go to app

Here you can see graphs and stats of how your services perform.

## Clean up

Stop and remove the bot.

`docker stop todo_bot && docker rm todo_bot`{{execute}}

Take the application and database down.

`docker-compose down`{{execute}}
