# Galaxy
Electron + React app to manage Solr clusters

## Install

First, clone the repo via git:

```bash
git clone https://github.com/thereactleague/galaxy.git your-project-name
```

And then install dependencies.

```bash
$ cd your-project-name && npm install
```

### Run

```bash
$ npm start
```

## Directory Structure

- Your client javascript lives in app/js/.
  - stateless functional components live in app/js/components 
  - containers for managing state live in app/js/containers 
- Your client SCSS lives in app/scss.
- Your electron server code lives in root.

### Building

- Build the client and server bundles: `gulp build`
- Watch app/ and src/ for changes and update build/ automagically: `gulp watch`
- Lint everything: `gulp lint`
- Open up the app: `gulp serve`. This will also live reload everything, so don't worry about that.
- Package the app for release: `gulp package`.

*Note: requires a node version >= 6.5 and an npm version >= 2.*
