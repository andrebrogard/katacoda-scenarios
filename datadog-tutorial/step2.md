


`docker-compose up -d`{{execute}}

https://[[HOST_SUBDOMAIN]]-3000-[[KATACODA_HOST]].environments.katacoda.com

`docker run --network=host -d --name todo_bot brogard/simple_datadog_tutorial_user_bot`{{execute}}

`docker stop todo_bot && docker rm todo_bot`{{execute}}

`docker-compose build`{{execute}}

`docker-compose logs --tail 5 -f`{{execute}}

`docker-compose down`{{execute}}


`docker build -t brogard/simple_datadog_tutorial_user_bot .`
`docker push brogard/simple_datadog_tutorial_user_bot`