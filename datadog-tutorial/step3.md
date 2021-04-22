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

Now we will add a DataDog agent to our docker compose network. The DataDog agent will forward our logs from our application to the DataDog website.

We start by editing our `docker-compose.yaml` file. Open the `docker-compose.yaml`{{open}} file. 

We will add the DataDog agent container to our compose file. Please also insert your **API key** here in the editor to the right after you have copid the belowed snippet.

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

Note: If you created your account in the US region. Please change 'datadoghq.eu' to 'datadoghq.com'

Next we will prepare our application environment to also include the following environvariables. This is so that it can find the DataDog agent in the network.

<pre class="file" data-filename="docker-compose.yaml" data-target="insert" data-marker="#TODO-add-DD-env">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DD_AGENT_HOST: datadog-agent 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DD_TRACE_AGENT_PORT: 8126 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DD_PROFILING_ENABLED: "true" 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DD_LOGS_INJECTION: "true" 
</pre>

The next time we build and run our compose file, our DataDog agent will also run and will be accessible to the application. 

Before we run this, we will integrate our 
