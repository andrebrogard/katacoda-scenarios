## Set up DataDog 

Start by creating a free trial account at https://www.datadoghq.com. It does not matter which region you create you account in. If you already have an account, grab your API key and skip to the Configure section.

In **1. Your Account:**
fill in your information

In **2. Your stack:**
you do not need to fill in anything (click no for "Are you a Managed Service Provider / Hosting Provider ?")

In **3. Agent Setup:**
copy your API key by clicking on Windows -> find your API key in the same place as the red rectangle in the image shown below (it should be a long sequence of random numbers and letters):

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

**Note:** The value of the 'DD_SITE' variable depends on which region you created your account in. If you created your account a US region, change 'datadoghq.eu' to 'datadoghq.com'

## Application environment
Next, you need your application environment to include the following environment variables. This is so that it can find the DataDog agent in the network. By copy-pasting the following, you will provide the application with the host name and port of the DataDog agent (default is 8126), and enable profiling. 

<pre class="file" data-filename="docker-compose.yaml" data-target="insert" data-marker="#TODO-add-DD-environment">
DD_AGENT_HOST: datadog-agent 
        DD_TRACE_AGENT_PORT: 8126 
        DD_PROFILING_ENABLED: "true" 
        DD_LOGS_INJECTION: "true"
</pre>
**Note:** Please excuse the weird formatting, but it will copy correctly to the editor this way.

## Next
Before you run the stack, you will make sure that the Node.js application sends data to the agent through the tracer library.