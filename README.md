[![Netlify Status](https://api.netlify.com/api/v1/badges/72731c13-3b8e-4ea4-87a1-5b53c1ac05ed/deploy-status)](https://app.netlify.com/sites/condescending-gates-bec8ba/deploys)

# JAMstack for Back-End Developers

JAMstack is a set of best practices for building decoupled front-ends with a heavy emphasis on build-time rendering.

It’s quickly gaining popularity because the managed services and front-end tooling have reached a tipping point where it’s now easy to make great static sites at build time.

Because of this, the responsibilities of Front-End and Back-End developers are changing. Check out the slides to see where I think things are going.

* [Download the presentation] (https://github.com/codingblocks/jamstack-for-backend-devs/blob/master/jamstack.pptx)
* Demo site: [findTech.events](https://findTech.events)



## Working with the code

This site requires a connection to postgres sql, and the schema has not been checked in anywhere yet. Shoot us a message if you are interested in actually running this code and we will help you set things up!

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