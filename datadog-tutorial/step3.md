## Set Up DataDog 

Start by creating an free trial account at datadoghq.com. This tutorial is based on accounts in the EU region,
but you choose any region, we will tell you where the configuration will differ!

In step 1. Your Account
fill in your information

In step 2. Your stack:
you do not need to fill in anything (click no for "Are you a Managed Service Provider / Hosting Provider)

In step 3. Agent Setup: 
copy your API key by clicking on Windows -> find your API key as shown in the image below: 

// lägga till bild EVA

## Configure 


`docker-compose build`{{execute}}

`docker build -t brogard/simple_datadog_tutorial_user_bot .`
`docker push brogard/simple_datadog_tutorial_user_bot`