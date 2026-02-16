# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

Start the Remix development asset server and the Express server by running:

```sh
npm run dev
```

This starts your app in development mode, which will purge the server require cache when Remix rebuilds assets so you don't need a process manager restarting the express server.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### Vercel (Without Docker)

This repository no longer includes Docker files. Deploy directly on Vercel:

1. Push this project to GitHub/GitLab/Bitbucket.
2. Import the repo in Vercel.
3. Set:
   - Build Command: `npm run build`
   - Install Command: `npm install`
   - Start Command: `npm start`
4. Add required environment variables from `config/.env.example` (and the additional values used in `app/env.server.js`) in Vercel Project Settings.

### DIY

If you're familiar with deploying express applications you should be right at home just make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```

## The logic for thank-you page is as follows -
Successful form submission and userSession cookie is set with right email id - https://ikarus3d.com/contact-us/thank-you?status_code=201&status=registered
Re-registration and userSession cookie is set with right email id - https://ikarus3d.com/contact-us/thank-you?status_code=429&status=existing
userSession cookie is unavailable or wrong email id in the cookie - Error page
Just the link https://ikarus3d.com/contact-us/thank-you with or without correct Cookie - Error page
## Remix Issues and Resolutions
Environment variables not loading - Create a `.env` file in root of the project. __Don't commit `.env` file to git.__ Remix has built-in support for dotenv. `.env` files are only for development. You should not use them in production, so Remix doesn't load them when running remix serve. You'll need to follow your host's guides on adding secrets to your production server. [Source 1](https://github.com/remix-run/remix/issues/5341) [Source 2](https://remix.run/docs/en/1.15.0/guides/envvars#local-development)
