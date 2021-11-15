# v3 version of lifecats.codes

## Contribution and development

*I am sure that absolutley no one cares, but still...*

To start development version, clone this repository and swith to `v3dev` branch.

Than install dependencies (using npm or yarn) `npm install`

Create your MongoDB cluster or get the local MongoDB database connection URI and put it into `.env.local` 

And finaly, start development version by running `npm run dev`


## Trid party services

- MongoDB
- Vercel

## How does client link saving work

When you already saved any link, it will automaticly save in your browser, using `localStorage` API. 

However this saving is tied to only one browser. So in case of using different browser on same machine, saves will not presist on both browsers.

Check MDN on `localStorage` to learn more
