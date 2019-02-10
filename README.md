[![Netlify Status](https://api.netlify.com/api/v1/badges/05de16b8-0066-4759-a155-a2f2966ca9bb/deploy-status)](https://app.netlify.com/sites/cocky-nightingale-7abbdc/deploys)

Helping developers find coding conferences since 2019.

Check out the preview on Netlify: https://cocky-nightingale-7abbdc.netlify.com/

## Development

This site requires a connection to postgres sql, and the schema has not been checked in anywhere yet. Shoot us a message if you are interested in getting this running and we can help!


### Environment Settings

* CONFERENCES_DB_CONNECTIONSTRING (required)
* CONFERENCES_DISQUS_KEY (optional)


Running locally

```
gatsby develop
```

Publishing

```
gatsby build
```

## Adding a new conference

Add a new conference by adding a new json file in the ./src/components/data/conferences folder. Take a look at one of the other files in there to see how it's structured.