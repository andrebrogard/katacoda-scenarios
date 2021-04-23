## Set Up DataDog 

Start by creating a free trial account at datadoghq.com. 

In **1. Your Account:**
fill in your information

In **2. Your stack:**
you do not need to fill in anything (click no for "Are you a Managed Service Provider / Hosting Provider ?")

In **3. Agent Setup:**
copy your API key by clicking on Windows -> find your API key in the same place as red rectangle in the image shown below: (it should be a long sequence of random numbers and letters)

<img src="https://github.com/andrebrogard/katacoda-scenarios/blob/main/datadog-tutorial/api_key.png?raw=true" alt="API_Key" width="350px" />

## Configure 

Now, you will add a DataDog agent to the network defined by the docker-compose file. The DataDog agent will forward the logs from the application to the DataDog website.

Start by editing the `docker-compose.yaml`{{open}} file. Open it, and add the DataDog agent container to the compose file:

<pre class="file" data-filename="docker-compose.yaml" data-target="insert" data-marker="#TODO-add-DD-service">
datadog-agent:
    image: gcr.io/datadoghq/agent:7
    container_name: datadog-agent
    environment:
      - DD_API_KEY=your-api-key
      - DD_SITE=datadoghq.eu
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /proc/:/host/proc/:ro
      - /sys/fs/cgroup:/host/sys/fs/cgroup:ro
</pre>

The file should now contain the code snippet above.

Now, insert your **API key** in the file instead of 'your-api-key'.

**Note:** The information besides 'DD_SITE' depends on which region you created your account in. If you created your account in the US region, change 'datadoghq.eu' to 'datadoghq.com'

## Application Environment
Next you need your application environment to include the following environment variables. This is so that it can find the DataDog agent in the network. You need to provide the application with the host name and port of the DataDog agent, and enable profiling. 

<pre class="file" data-filename="docker-compose.yaml" data-target="insert" data-marker="#TODO-add-DD-environment">
DD_AGENT_HOST: datadog-agent 
        DD_TRACE_AGENT_PORT: 8126 
        DD_PROFILING_ENABLED: "true" 
        DD_LOGS_INJECTION: "true"
</pre>

## Next
In the next step, you will build and run your compose file, and your DataDog agent will also run and will be accessible to the application. 

Before you run the stack, you will make sure that the nodejs application sends data to the agent.